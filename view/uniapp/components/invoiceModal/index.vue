<template>
	<view class="aleart" v-if="aleartStatus">
		<view class="icon-top">
			<text class="iconfont icon-fapiao2" :style="invoiceData.is_invoice?'background-color: var(--view-theme)':'background-color: #999'"></text>
			<view>
				{{invoiceData.is_invoice?'已开票':'未开票'}}
			</view>
		</view>
		
		<view class="aleart-body">
			<view class="body-head">发票信息</view>
			<view class="label">
				<view class="">
					发票金额
				</view>
				<view class="label-value">
					￥{{invoiceData.pay_price}}
				</view>
			</view>
			<view class="label">
				<view class="">
					发票抬头
				</view>
				<view class="label-value">
					{{invoiceData.name}}
				</view>
			</view>
			<view class="label">
				<view class="">
					发票抬头类型
				</view>
				<view class="label-value">
					{{invoiceData.header_type == 1?"个人":'企业'}}
				</view>
			</view>
			<view class="label">
				<view class="">
					发票类型
				</view>
				<view class="label-value">
					{{invoiceData.type==1?"电子普通发票":'电子专用发票'}}
				</view>
			</view>
			<view class="label">
				<view class="">
					企业税号
				</view>
				<view class="label-value">
					{{invoiceData.duty_number}}
				</view>
			</view>
			
			<view class="body-head">联系信息</view>
			<view class="label">
				<view class="">
					真实姓名	
				</view>
				<view class="label-value">
					{{invoiceData.name}}
				</view>
			</view>
			<view class="label">
				<view class="">
					联系电话
				</view>
				<view class="label-value">
					{{invoiceData.drawer_phone}}
				</view>
			</view>
			<view class="label">
				<view class="">
					联系邮箱
				</view>
				<view class="label-value">
					{{invoiceData.email}}
				</view>
			</view>
		</view>
		<view class="btn" @click="close">
			确认
		</view>
	</view>
</template>

<script>
	export default ({
		data() {
			return {

			}
		},
		props:{
			aleartStatus:{
				type:Boolean,
				default: false
			},
			invoiceData:{
				type:Object,
				default:()=>{}
			}
		},
		methods:{
			close(){
				this.$emit('close')
			},
		}
	})
</script>

<style lang="scss" scoped>
	.aleart {
		width: 80%;
		// height: 714rpx;
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		z-index: 9999;
		top: 45%;
		margin-top: -357rpx;
		background-color: #fff;
		padding: 30rpx;
		border-radius: 12rpx;
		background-image:-webkit-gradient(
		linear,//表示渐变的为直线 另外一个值是radial
		50% 0,//直线型渐变的起点位置 后边有一个属性background-size规定背景的大小，30 X 15px  50% 0 都是乘以父元素的宽高。 
		0 100%,//结束点的位置 和上类似
		from(transparent),//起点的颜色
		color-stop(.5,transparent), //中间某一个点必须达到这个颜色，表示变化过程  .5b表示这个渐变范围长度的总长的50%
		color-stop(.5,#999999),//同上
		to(#999999)),//结束段的颜色
		//一个背景块的分为两个15X 15  组成。
		
		-webkit-gradient(linear,50% 0,100% 100%,from(transparent), 
		color-stop(.5,transparent),
		color-stop(.5,#999999),
		to(#999999));
		background-size:20rpx 10rpx;
		background-repeat:repeat-x;
		background-position:0 100%; 
		
		.icon-top{
			margin-left: calc(50% - 40rpx ) ;
			margin-top: -40rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: 50%;
			width: 100rpx;
			height: 100rpx;
			.icon-fapiao2{
				text-align: center;
				border-radius: 50%;
				font-size: 80rpx;
				color: #fff;
				background-color: var(--view-theme);
				padding: 20rpx;
				border: 4rpx solid #fff;
				margin-top: -40rpx;
			}
		}
		.title {
			font-size: 34rpx;
			color: var(--view-theme);
			font-weight: bold;
			text-align: center;
			padding-bottom: 10rpx;
			border-bottom: 1px solid --view-minorColorT;
		}

		.aleart-body {
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 60rpx 0;
			.body-head{
				font-size: 30rpx;
				font-weight: bold;
				padding-bottom: 10rpx;
				border-bottom: 1px solid #EEEEEE;
				margin: 10rpx 0;
			}
			.label{
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-bottom: 15rpx;
				color: #333333;
				font-size: 28rpx;
				.label-value{
					color: #666666;
				}
			}
		}

		.btn {
			width: 100%;
			padding: 15rpx 0;
			color: #fff;
			background: var(--view-theme);
			border-radius: 20px;
			text-align: center;
			margin-bottom: 30rpx;
		}
	}
</style>
