<template>
    <div class="form-submit">
        <div class="i-layout-page-header">
            <PageHeader class="product_tabs" hidden-breadcrumb>
                <div slot="title">
                    <router-link :to="{ path: '/admin/marketing/store_seckill/index' }">
                        <!-- <Button icon="ios-arrow-back" size="small"  class="mr20">返回</Button> -->
                        <div class="font-sm after-line">
                            <span class="iconfont iconfanhui"></span>
                            <span class="pl10">返回</span>
                        </div>
                    </router-link>
                    <span v-text="$route.params.id ? '编辑秒杀商品' : '添加秒杀商品'" class="mr20 ml16"></span>
                </div>
            </PageHeader>
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <Row type="flex" class="mt30 acea-row row-middle row-center">
                <Col span="20">
                <Steps :current="current">
                    <Step title="选择秒杀商品"></Step>
                    <Step title="填写基础信息"></Step>
                    <Step title="修改商品详情"></Step>
                </Steps>
                </Col>
                <Col span="23">
                <Col span="24">
                <div class="lines" style="margin-top: 25px;"></div>
                </Col>
                <Form class="form mt30" ref="formValidate" :model="formValidate" :rules="ruleValidate"
                    :label-width="labelWidth" :label-position="labelPosition" @submit.native.prevent>
                    <FormItem label="选择商品：" prop="image_input" v-if="current === 0">
                        <div class="picBox" @click="changeGoods">
                            <div class="pictrue" v-if="formValidate.image"><img v-lazy="formValidate.image"></div>
                            <div class="upLoad acea-row row-center-wrapper" v-else>
                                <Icon type="ios-camera-outline" size="26" class="iconfonts" />
                            </div>
                        </div>
                    </FormItem>
                    <Col v-show="current === 1" type="flex">
                    <Col span="24">
                    <FormItem label="秒杀活动名称：" prop="title" label-for="title">
                        <Input class="perW40" placeholder="请输入秒杀活动名称" element-id="title" v-model="formValidate.title" />
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <FormItem label="秒杀活动简介：" prop="info" label-for="info">
                        <Input class="perW40" placeholder="请输入秒杀活动简介" type="textarea" :rows="4" element-id="info"
                            v-model="formValidate.info" />
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <FormItem label="单位：" prop="unit_name" label-for="unit_name">
                        <Select v-model="formValidate.unit_name" clearable placeholder="请选择单位" class="perW40">
                            <Option v-for="(item, index) in unitNameList" :value="item.name" :key="index">{{ item.name
                            }}</Option>
                        </Select>
                        <span class="addClass" @click="addUnit">新增单位</span>
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <FormItem prop="images">
                        <div class="custom-label" slot="label">
                            <div>
                                <div>商品轮播图</div>
                            </div>
                            <div>：</div>
                        </div>
                        <div class="acea-row">
                            <div class="pictrue" v-for="(item, index) in formValidate.images" :key="index"
                                draggable="true" @dragstart="handleDragStart($event, item)"
                                @dragover.prevent="handleDragOver($event, item)"
                                @dragenter="handleDragEnter($event, item)" @dragend="handleDragEnd($event, item)">
                                <img v-lazy="item">
                                <Button shape="circle" icon="md-close" @click.native="handleRemove(index)"
                                    class="btndel"></Button>
                            </div>
                            <div v-if="formValidate.images.length < 10" class="upLoad acea-row row-center-wrapper"
                                @click="modalPicTap('duo')">
                                <Icon type="ios-camera-outline" size="26" class="iconfonts" />
                            </div>
                        </div>
                        <div class="tips"> 建议尺寸：800 * 800px，可拖拽改变图片顺序，默认首张图为主图，最多上传10张</div>
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <div class="lines"></div>
                    </Col>
                    <Col span="24">
                    <FormItem label="活动时间：" prop="section_time">
                        <div class="acea-row row-middle">
                            <DatePicker :editable="false" type="daterange" format="yyyy-MM-dd" placeholder="请选择活动时间"
                                @on-change="onchangeTime" class="perW40" :value="formValidate.section_time"
                                v-model="formValidate.section_time"></DatePicker>
                        </div>
                        <div class="tips">设置活动开启结束时间，用户可以在有效时间内参与秒杀</div>
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <FormItem label="开始时间：" prop="time_id">
                        <div class="acea-row row-middle">
                            <Select v-model="formValidate.time_id" class="perW40">
                                <Option v-for="item in timeList" :value="item.id" :key="item.id">{{ item.time }}点开始,持续{{
                                        item.continued
                                }}小时</Option>
                            </Select>
                        </div>
                        <div class="tips">选择产品开始时间段，该时间段内用户可参与购买；其它时间段会显示活动未开始或已结束。如活动超过一天，则活动期内，每天都会定时开启</div>
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <FormItem label="总购买数量限制：" prop="num">
                        <div class="acea-row row-middle">
                            <InputNumber :min="1" placeholder="请输入数量限制" element-id="num" :precision="0"
                                v-model="formValidate.num" class="perW40" />
                            <span class="ml10">个</span>
                        </div>
                        <div class="tips">活动有效期内每个用户可购买该商品总数限制。例如设置为4，表示本次活动有效期内，每个用户最多可购买总数4个</div>
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <FormItem label="单次购买数量限制：" prop="once_num">
                        <div class="acea-row row-middle">
                            <InputNumber :min="1" placeholder="请输入单次购买数量限制" element-id="once_num" :precision="0"
                                v-model="formValidate.once_num" class="perW40" />
                            <span class="ml10">个</span>
                        </div>
                        <div class="tips">用户参与秒杀时，一次购买最大数量限制。例如设置为2，表示参与秒杀时，用户一次购买数量最大可选择2个</div>
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <FormItem label="规格选择：">
                        <Table :data="specsData" :columns="columns" border class="mt25" highlight-row
                            @on-selection-change="changeCheckbox">
                            <template slot-scope="{ row, index }" slot="pic">
                                <div class="acea-row row-middle row-center-wrapper"
                                    @click="modalPicTap('dan', 'danTable', index)">
                                    <div class="pictrue pictrueTab" v-if="row.pic"><img v-lazy="row.pic"></div>
                                    <div class="upLoad pictrueTab acea-row row-center-wrapper" v-else>
                                        <Icon type="ios-camera-outline" size="21" class="iconfont" />
                                    </div>
                                </div>
                            </template>
                        </Table>
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <div class="lines"></div>
                    </Col>
                    <Col span="24" v-if="formValidate.product_type == 0">
                    <FormItem label="配送方式：">
                        <CheckboxGroup v-model="formValidate.delivery_type">
                            <Checkbox label="1" disabled>快递</Checkbox>
                            <Checkbox label="3">门店配送</Checkbox>
                            <Checkbox label="2">到店自提</Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    </Col>
                    <Col span="24" v-if="formValidate.product_type == 0">
                    <FormItem label="运费设置：">
                        <RadioGroup v-model="formValidate.freight">
                            <Radio :label="1">包邮</Radio>
                            <Radio :label="2">固定邮费</Radio>
                            <Radio :label="3">运费模板</Radio>
                        </RadioGroup>
                    </FormItem>
                    </Col>
                    <Col span="24" v-if="formValidate.freight == 2 && formValidate.product_type == 0">
                    <FormItem label="" prop="freight">
                        <div class="acea-row row-middle">
                            <InputNumber :min="0" v-model="formValidate.postage" placeholder="请输入金额"
                                class="perW20 maxW" />
                            <span class="ml10">元</span>
                        </div>
                    </FormItem>
                    </Col>
                    <Col span="24" v-if="formValidate.freight == 3 && formValidate.product_type == 0">
                    <FormItem label="" prop="">
                        <div class="acea-row">
                            <Select v-model="formValidate.temp_id" clearable class="perW20 maxW">
                                <Option v-for="(item, index) in templateList" :value="item.id" :key="index">{{ item.name
                                }}</Option>
                            </Select>
                            <Button @click="addTemp" class="ml15">添加运费模板</Button>
                        </div>
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <FormItem label="排序：">
                        <InputNumber placeholder="请输入排序" element-id="sort" :precision="0" :min="0"
                            v-model="formValidate.sort" class="perW20 maxW" />
                    </FormItem>
                    </Col>
                    <Col span="24">
                    <FormItem label="活动状态：" props="status" label-for="status">
                        <!-- <RadioGroup element-id="status"  v-model="formValidate.status">
							            <Radio :label="1" class="radio">开启</Radio>
							            <Radio :label="0">关闭</Radio>
							        </RadioGroup> -->
                        <i-switch v-model="formValidate.status" :true-value="1" :false-value="0" size="large">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </FormItem>
                    </Col>
                    <Col span="24" v-if="formValidate.product_type">
                    <FormItem label="支持退款：" props="status" label-for="status">
                        <i-switch v-model="formValidate.is_support_refund" :true-value="1" :false-value="0"
                            size="large">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </FormItem>
                    </Col>
                    </Col>
                    <Row v-show="current === 2">
                        <Col span="24">
                        <FormItem label="内容：">
                            <WangEditor style="width: 90%" :content="formValidate.description"
                                @editorContent="getEditorContent"></WangEditor>
                        </FormItem>
                        </Col>
                    </Row>
                </Form>
                <Spin size="large" fix v-if="spinShow"></Spin>
                </Col>
            </Row>
        </Card>
        <Card :bordered="false" dis-hover class="fixed-card"
            :style="{ left: `${!menuCollapse ? '200px' : isMobile ? '0' : '80px'}` }">
            <Form>
                <FormItem>
                    <Button class="submission mr15" @click="step" v-show="current !== 0"
                        :disabled="$route.params.id && current === 1">上一步
                    </Button>
                    <Button :disabled="submitOpen && current === 2" type="primary" class="submission"
                        @click="next('formValidate')" v-text="current === 2 ? '提交' : '下一步'"></Button>
                </FormItem>
            </Form>
        </Card>
        <!-- 选择商品-->
        <Modal v-model="modals" title="商品列表" class="paymentFooter" footerHide scrollable width="900"
            @on-cancel="cancel">
            <goods-list ref="goodslist" :goodsType="1" @getProductId="getProductId"></goods-list>
        </Modal>
        <!-- 上传图片-->
        <Modal v-model="modalPic" width="960px;" scrollable footer-hide closable title='上传商品图' :mask-closable="false"
            :z-index="1">
            <uploadPictures :isChoice="isChoice" @getPic="getPic" @getPicD="getPicD" :gridBtn="gridBtn"
                :gridPic="gridPic" v-if="modalPic"></uploadPictures>
        </Modal>
        <freightTemplate :template="template" v-on:changeTemplate="changeTemplate" ref="templates"></freightTemplate>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import goodsList from '@/components/goodsList/index';
import UeditorWrap from '@/components/ueditorFrom/index';
import WangEditor from "@/components/wangEditor/index.vue";
import uploadPictures from '@/components/uploadPictures';
import { seckillInfoApi, seckillAddApi, seckillTimeListApi, productAttrsApi } from '@/api/marketing';
import { productGetTemplateApi, productAllUnit, productUnitCreate } from '@/api/product';
import freightTemplate from "@/components/freightTemplate";
import { log } from 'util';
export default {
    name: 'storeSeckillCreate',
    components: { UeditorWrap, goodsList, uploadPictures, WangEditor, freightTemplate },
    data() {
        return {
            template: false,
            submitOpen: false,
            spinShow: false,
            isChoice: '',
            current: 0,
            modalPic: false,
            grid: {
                xl: 12,
                lg: 20,
                md: 24,
                sm: 24,
                xs: 24
            },
            grid2: {
                xl: 8,
                lg: 12,
                md: 12,
                sm: 24,
                xs: 24
            },
            gridPic: {
                xl: 6,
                lg: 8,
                md: 12,
                sm: 12,
                xs: 12
            },
            gridBtn: {
                xl: 4,
                lg: 8,
                md: 8,
                sm: 8,
                xs: 8
            },
            myConfig: {
                autoHeightEnabled: false, // 编辑器不自动被内容撑高
                initialFrameHeight: 500, // 初始容器高度
                initialFrameWidth: '100%', // 初始容器宽度
                UEDITOR_HOME_URL: '/admin/UEditor/',
                serverUrl: ''
            },
            modals: false,
            modal_loading: false,
            images: [],
            unitNameList: [],
            formValidate: {
                is_support_refund: 0,
                product_type: 0,
                freight: 1, //运费设置
                delivery_type: ['1'],
                images: [],
                info: '',
                title: '',
                image: '',
                unit_name: '',
                price: 0,
                ot_price: 0,
                cost: 0,
                sales: 0,
                stock: 0,
                sort: 0,
                num: 1,
                once_num: 1,
                give_integral: 0,
                postage: 0,
                section_time: [],
                is_postage: 0,
                is_hot: 0,
                status: 0,
                description: '',
                id: 0,
                product_id: 0,
                temp_id: '',
                time_id: '',
                attrs: [],
                items: []
            },
            description:'',
            templateList: [],
            timeList: [],
            columns: [],
            specsData: [],
            picTit: '',
            tableIndex: 0,
            ruleValidate: {
                image: [
                    { required: true, message: '请选择主图', trigger: 'change' }
                ],
                images: [
                    { required: true, type: 'array', message: '请选择主图', trigger: 'change' },
                    { type: 'array', min: 1, message: 'Choose two hobbies at best', trigger: 'change' }
                ],
                title: [
                    { required: true, message: '请输入商品标题', trigger: 'blur' }
                ],
                info: [
                    { required: true, message: '请输入秒杀活动简介', trigger: 'blur' }
                ],
                section_time: [
                    { required: true, type: 'array', message: '请选择活动时间', trigger: 'change' }
                ],
                unit_name: [
                    { required: true, message: '请选择单位', trigger: 'change' }
                ],
                // unit_name: [
                //     {
                //         required: true,
                //         message: "请输入单位",
                //         trigger: "change",
                //     }
                // ],
                price: [
                    { required: true, type: 'number', message: '请输入秒杀价', trigger: 'blur' }
                ],
                ot_price: [
                    { required: true, type: 'number', message: '请输入原价', trigger: 'blur' }
                ],
                cost: [
                    { required: true, type: 'number', message: '请输入成本价', trigger: 'blur' }
                ],
                stock: [
                    { required: true, type: 'number', message: '请输入库存', trigger: 'blur' }
                ],
                num: [
                    { required: true, type: 'number', message: '请输入购买数量限制', trigger: 'blur' }
                ],
                once_num: [
                    { required: true, type: 'number', message: '请输入单次购买数量限制', trigger: 'blur' }
                ],
                time_id: [
                    { required: true, message: '请选择开始时间', trigger: 'change', type: 'number' }
                ]
            },
            copy: 0
        }
    },
    computed: {
        ...mapState('admin/layout', [
            'isMobile',
            'menuCollapse'
        ]),
        labelWidth() {
            return this.isMobile ? undefined : 135;
        },
        labelPosition() {
            return this.isMobile ? 'top' : 'right';
        }
    },
    mounted() {
        if (this.$route.params.id) {
            this.copy = this.$route.params.copy;
            this.current = 1;
            this.getInfo();
        }
        this.productGetTemplate();
        this.seckillTimeList();
        this.getAllUnit();
    },
    methods: {
        changeTemplate(msg) {
            this.template = msg;
        },
        // 添加运费模板
        addTemp() {
            this.$refs.templates.isTemplate = true;
        },
        addUnit() {
            this.$modalForm(productUnitCreate()).then(() => this.getAllUnit());
        },
        getAllUnit() {
            productAllUnit().then(res => {
                this.unitNameList = res.data;
            }).catch(err => {
                this.$Message.error(err.msg);
            })
        },
        getEditorContent(data) {
            this.description = data;
        },
        // 秒杀规格；
        productAttrs(rows) {
            let that = this;
            productAttrsApi(rows.id, 1).then(res => {
                let data = res.data.info;
                let selection = {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                };
                that.specsData = data.attrs;
                that.specsData.forEach(function (item, index) {
                    that.$set(that.specsData[index], 'id', index);
                });
                that.formValidate.items = data.items;
                that.columns = data.header;
                that.columns.unshift(selection);
                that.inputChange(data);
            }).catch(res => {
                that.$Message.error(res.msg);
            })
        },
        inputChange(data) {
            let that = this;
            let $index = [];
            data.header.forEach(function (item, index) {
                if (item.type === 1) {
                    $index.push({ index: index, key: item.key, title: item.title });
                }
            });
            $index.forEach(function (item, index) {
                let title = item.title;
                let key = item.key;
                let row = {
                    title: title,
                    key: key,
                    align: 'center',
                    minWidth: 120,
                    render: (h, params) => {
                        return h('div', [
                            h('InputNumber', {
                                props: {
                                    min: 0,
                                    value: key === 'price' ? params.row.price : params.row.quota
                                },
                                on: {
                                    'on-change': e => {
                                        key === 'price' ? params.row.price = e : params.row.quota = e;
                                        that.specsData[params.index] = params.row;
                                        if (!!that.formValidate.attrs && that.formValidate.attrs.length) {
                                            that.formValidate.attrs.forEach((v, index) => {
                                                if (v.id === params.row.id) {
                                                    that.formValidate.attrs.splice(index, 1, params.row);
                                                }
                                            });
                                        }
                                    }
                                }
                            })
                        ])
                    }
                };
                that.columns.splice(item.index, 1, row);
            });
        },
        // 多选
        changeCheckbox(selection) {
            this.formValidate.attrs = selection;
        },
        seckillTimeList() {
            let that = this;
            seckillTimeListApi().then(res => {
                that.timeList = res.data.list.data
            }).catch(res => {
                that.$Message.error(res.msg);
            })
        },
        // 获取运费模板；
        productGetTemplate() {
            productGetTemplateApi().then(res => {
                this.templateList = res.data;
            })
        },
        // 表单验证
        validate(prop, status, error) {
            if (status === false) {
                this.$Message.error(error);
            }
        },
        // 商品id
        getProductId(row) {
            this.modal_loading = false;
            this.modals = false;
            setTimeout(() => {
                this.formValidate = {
                    is_support_refund: row.is_support_refund,
                    product_type: row.product_type,
                    images: row.slider_image,
                    info: row.store_info,
                    title: row.store_name,
                    image: row.image,
                    unit_name: row.unit_name,
                    price: 0, // 不取商品中的原价
                    ot_price: row.ot_price,
                    cost: row.cost,
                    sales: row.sales,
                    stock: row.stock,
                    sort: row.sort,
                    num: 1,
                    once_num: 1,
                    give_integral: row.give_integral,
                    postage: row.postage,
                    section_time: [],
                    is_postage: row.is_postage,
                    is_hot: row.is_hot,
                    status: 0,
                    description: row.description,
                    id: 0,
                    product_id: row.id,
                    temp_id: row.temp_id,
                    freight: 1, //运费设置
                    delivery_type: ['1']
                };
                this.productAttrs(row);
                this.$refs.goodslist.productRow = null;
            }, 500);
            this.description = row.description
        },

        cancel() {
            this.modals = false;
        },
        // 具体日期
        onchangeTime(e) {
            this.formValidate.section_time = e;
        },
        // 详情
        getInfo() {
            this.spinShow = true;
            seckillInfoApi(this.$route.params.id).then(async res => {
                let that = this;
                let info = res.data.info;
                let selection = {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                };
                this.description = info.description;
                this.formValidate = info;
                this.$set(this.formValidate, 'items', info.attrs.items);
                this.columns = info.attrs.header;
                this.columns.unshift(selection);
                this.specsData = info.attrs.value;
                that.specsData.forEach(function (item, index) {
                    that.$set(that.specsData[index], 'id', index);
                });
                let data = info.attrs;
                let attr = [];
                for (let index in info.attrs.value) {
                    if (info.attrs.value[index]._checked) {
                        attr.push(info.attrs.value[index]);
                    }
                }
                that.formValidate.attrs = attr;
                that.inputChange(data);
                this.spinShow = false;
            }).catch(res => {
                this.spinShow = false;
                this.$Message.error(res.msg);
            })
        },
        // 下一步
        next(name) {
            console.log('unit_name',this.formValidate.unit_name);
            
            let that = this;
            if (this.current === 2) {
                this.formValidate.description = this.description

                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (this.copy == 1) this.formValidate.copy = 1;
                        this.formValidate.id = Number(this.$route.params.id) || 0;
                        this.submitOpen = true;
                        if (!this.formValidate.product_type) {
                            this.formValidate.is_support_refund = 1;
                        }
                        seckillAddApi(this.formValidate).then(async res => {
                            this.submitOpen = false;
                            this.$Message.success(res.msg);
                            setTimeout(() => {
                                this.$router.push({ path: '/admin/marketing/store_seckill/index' });
                            }, 500);
                        }).catch(res => {
                            this.submitOpen = false;
                            this.$Message.error(res.msg);
                        })
                    } else {
                        return false
                    }
                })
            } else if (this.current === 1) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (!that.formValidate.attrs) {
                            return that.$Message.error('请选择属性规格');
                        } else {
                            for (let index in that.formValidate.attrs) {
                                if (that.formValidate.attrs[index].quota <= 0) {
                                    return that.$Message.error('秒杀限量必须大于0');
                                }
                            }
                        }
                        if (this.formValidate.product_type == 0 && this.formValidate.freight == 2 && this.formValidate.postage <= 0) {
                            return this.$Message.warning("物流设置-固定邮费不能为0");
                        }
                        if (this.formValidate.product_type == 0 && this.formValidate.freight == 3 && !this.formValidate.temp_id) {
                            return this.$Message.warning("物流设置-运费模板不能为空");
                        }
                        this.current += 1;
                    } else {
                        return this.$Message.warning('请完善商品信息');
                    }
                })
            } else {
                if (this.formValidate.image) {
                    this.current += 1;
                } else {
                    this.$Message.warning('请选择商品');
                }
            }
            // let that = this;
            // if (this.current === 2) {
            //     this.$refs[name].validate((valid) => {
            //         if (valid) {
            //             if (!that.formValidate.attrs) {
            //                 return that.$Message.error('请选择属性规格');
            //             } else {
            //                 for (let index in that.formValidate.attrs) {
            //                     if (that.formValidate.attrs[index].quota <= 0) {
            //                         return that.$Message.error('秒杀限量必须大于0');
            //                     }
            //                 }
            //             }
            //             if (this.copy == 1 )this.formValidate.copy = 1;
            //             this.formValidate.id = Number(this.$route.params.id) || 0;
            //             this.submitOpen = true;
            //             seckillAddApi(this.formValidate).then(async res => {
            //                 this.submitOpen = false;
            //                 this.$Message.success(res.msg);
            //                 setTimeout(() => {
            //                     this.$router.push({ path: '/admin/marketing/store_seckill/index' });
            //                 }, 500);
            //             }).catch(res => {
            //                 this.submitOpen = false;
            //                 this.$Message.error(res.msg);
            //             })
            //         } else {
            //             return false
            //         }
            //     })
            // } else {
            //     if (this.formValidate.image) {
            //         this.current += 1;
            //     } else {
            //         this.$Message.warning('请选择商品');
            //     }
            // }
        },
        // 上一步
        step() {
            this.current--;
        },
        // 内容
        getContent(val) {
            this.formValidate.description = val;
        },
        // 点击商品图
        modalPicTap(tit, picTit, index) {
            this.modalPic = true;
            this.isChoice = tit === 'dan' ? '单选' : '多选';
            this.picTit = picTit;
            this.tableIndex = index;
        },
        // 获取单张图片信息
        getPic(pc) {
            switch (this.picTit) {
                case 'danFrom':
                    this.formValidate.image = pc.att_dir;
                    break;
                // case 'danTable':
                //     this.specsData[this.tableIndex].pic = pc.att_dir;
                //     break;
                default:
                    if (!!this.formValidate.attrs && this.formValidate.attrs.length) {
                        this.$set(this.specsData[this.tableIndex], '_checked', true);
                    }
                    this.specsData[this.tableIndex].pic = pc.att_dir;
            }
            this.modalPic = false;
        },
        // 获取多张图信息
        getPicD(pc) {
            this.images = pc;
            this.images.map((item) => {
                this.formValidate.images.push(item.att_dir)
                this.formValidate.images = this.formValidate.images.splice(0, 10);
            });
            this.modalPic = false;
        },
        handleRemove(i) {
            this.images.splice(i, 1);
            this.formValidate.images.splice(i, 1);
        },
        // 选择商品
        changeGoods() {
            this.modals = true;
        }, // 移动
        handleDragStart(e, item) {
            this.dragging = item;
        },
        handleDragEnd(e, item) {
            this.dragging = null
        },
        // 首先把div变成可以放置的元素，即重写dragenter/dragover
        handleDragOver(e) {
            e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
        },
        handleDragEnter(e, item) {
            e.dataTransfer.effectAllowed = 'move'// 为需要移动的元素设置dragstart事件
            if (item === this.dragging) {
                return
            }
            const newItems = [...this.formValidate.images]
            const src = newItems.indexOf(this.dragging)
            const dst = newItems.indexOf(item)
            newItems.splice(dst, 0, ...newItems.splice(src, 1))
            this.formValidate.images = newItems;
        },
        // 添加自定义弹窗
        addCustomDialog(editorId) {
            window.UE.registerUI('test-dialog', function (editor, uiName) {
                // 创建 dialog
                let dialog = new window.UE.ui.Dialog({
                    // 指定弹出层中页面的路径，这里只能支持页面，路径参考常见问题 2
                    iframeUrl: '/admin/widget.images/index.html?fodder=dialog',
                    // 需要指定当前的编辑器实例
                    editor: editor,
                    // 指定 dialog 的名字
                    name: uiName,
                    // dialog 的标题
                    title: '上传图片',
                    // 指定 dialog 的外围样式
                    cssRules: 'width:1200px;height:500px;padding:20px;'
                });
                this.dialog = dialog;
                // 参考上面的自定义按钮
                var btn = new window.UE.ui.Button({
                    name: 'dialog-button',
                    title: '上传图片',
                    cssRules: `background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;`,
                    onclick: function () {
                        // 渲染dialog
                        dialog.render();
                        dialog.open();
                    }
                });
                return btn;
            }, 37 /* 指定添加到工具栏上的那个位置，默认时追加到最后 */, editorId /* 指定这个UI是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */);
        }
    }
}
</script>

<style scoped lang="stylus">
    .custom-label
        display inline-flex
        line-height 1.5
    .grey
        color #999;
    .maxW /deep/.ivu-select-dropdown{
        max-width 600px;
    }
    .tabBox_img
        width 50px;
        height 50px;
        margin 0 auto;
    .tabBox_img img
        width 100%;
        height 100%;
    .priceBox
        width 100%
    .form
        .picBox
            display: inline-block;
            cursor: pointer;
        .pictrue
            width:60px;
            height:60px;
            border:1px dotted rgba(0,0,0,0.1);
            margin-right:15px;
            display: inline-block;
            position: relative;
            cursor: pointer;
            img
                width 100%
                height 100%
            .btndel
                position: absolute;
                z-index: 9;
                width :20px !important;
                height: 20px !important;
                left: 46px;
                top: -4px;
        .upLoad {
            width: 58px;
            height: 58px;
            line-height: 58px;
            border: 1px dotted rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.02);
            cursor: pointer;
        }
.lines {
	  border-bottom: 1px dashed #eee;
	  margin-bottom: 20px;
	}		
.tips {
	  display: inline-bolck;
	  font-size: 12px;
	  font-weight: 400;
	  color: #999999;
	  margin-top: 10px;
	  line-height: initial;
	}
.addClass{
		color: #1890FF;
		margin-left 14px;
		padding 9px 0;
		cursor pointer;
	}	
    .form-submit {
	  /deep/.ivu-card{
	  	border-radius: 0;
	  }
    margin-bottom: 79px;

    .fixed-card {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 200px;
        z-index: 99;
        box-shadow: 0 -1px 2px rgb(240, 240, 240);

        /deep/ .ivu-card-body {
            padding: 15px 16px 14px;
        }

        .ivu-form-item {
            margin-bottom: 0;
        }

        /deep/ .ivu-form-item-content {
            margin-right: 124px;
            text-align: center;
        }

        .ivu-btn {
            height: 36px;
            padding: 0 20px;
        }
    }
}
</style>
