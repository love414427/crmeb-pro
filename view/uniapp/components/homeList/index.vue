<template>
	<!-- #ifdef APP-PLUS -->
	<view class="animated dialog_nav" :style="{ top: (navH+15) + 'rpx', marginTop: sysHeight}" :class="[goodList?'dialogIndex':'',currentPage?'':'']" v-show="currentPage">
	<!-- #endif -->
	<!-- #ifndef APP-PLUS -->
	<view class="animated dialog_nav" :style="{ top: (navH+15) + 'rpx' }" :class="[goodList?'dialogIndex':'',goodsShow?'dialogGoods':'',currentPage?'':'']" v-show="currentPage">
	<!-- #endif -->
		<view class="dialog_nav_item" :class="item.after" v-for="(item,index) in selectNavList" :key="index" @click="linkPage(item.url)">
			<text class="iconfont" :class="item.icon"></text>
			<text class="pl-20">{{item.name}}</text>
		</view>
	</view>
</template>
<script>
	export default {
		name: "homeIdex",
		props: {
			navH: {
				type: String|Number,
				default: ""
			},
			returnShow: {
				type: Boolean,
				default: true
			},
			goodList: {
				type: Boolean,
				default: false
			},
			currentPage: {
				type: Boolean,
				default: false
			},
			goodsShow: {
				type: Boolean,
				default: false
			},
			sysHeight: {
				type: String|Number,
				default: ""
			}
		},
		data: function() {
			return {
				selectNavList:[
					{name:'首页',icon:'icon-shouye8',url:'/pages/index/index',after:'dialog_after'},
					{name:'搜索',icon:'icon-sousuo6',url:'/pages/goods_search/index',after:'dialog_after'},
					{name:'购物车',icon:'icon-gouwuche7',url:'/pages/order_addcart/order_addcart',after:'dialog_after'},
					{name:'我的收藏',icon:'icon-shoucang3',url:'/pages/users/user_goods_collection/index',after:'dialog_after'},
					{name:'个人中心',icon:'icon-gerenzhongxin1',url:'/pages/user/index'},
				]
			};
		},
		methods: {
			linkPage(url){
				if (['/pages/goods_cate/goods_cate', '/pages/order_addcart/order_addcart', '/pages/user/index', '/pages/index/index']
					.indexOf(url) == -1) {
					uni.navigateTo({
						url: url
					})
				} else {
					uni.switchTab({
						url: url
					})
				}
			}
		},
		created() {},
		beforeDestroy() {
		}
	};
</script>

<style scoped lang="scss">
	.dialog_nav{
		position: absolute;
		/* #ifdef MP */
		left: 14rpx;
		/* #endif */
		/* #ifndef MP */
		right: 14rpx;
		/* #endif */
		width: 240rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 16rpx rgba(0, 0, 0, 0.08);
		z-index: 310;
		border-radius: 14rpx;
		&::before{
			content: '';
			width: 0;
			height: 0;
			position: absolute;
			/* #ifdef MP */
			left: -26rpx;
			/* #endif */
			/* #ifndef MP */
			left: 150rpx;
			/* #endif */
			right: 0;
			margin:auto;
			top:-9px;
			border-bottom: 10px solid #F5F5F5;
			border-left: 10px solid transparent;    /*transparent 表示透明*/
			border-right: 10px solid transparent;
		}
		&.dialogIndex{
			left: 14rpx;
			&::before{
				left: -160rpx!important;
			}
		}
		&.dialogGoods{
			&::before{
				left: -170rpx;
			}
		}
	}
	.dialog_nav_item{
		width: 100%;
		height: 84rpx;
		line-height: 84rpx;
		padding: 0 20rpx 0;
		box-sizing: border-box;
		border-bottom: #eee;
		font-size: 28rpx;
		color: #333;
		position: relative;
		display: flex;
		.iconfont{
			font-size: 32rpx;
			margin-right: 26rpx;
		}
	}
	.dialog_after{
		::after{
			content: '';
			position: absolute;
			width:90px;
			height: 1px;
			background-color: #EEEEEE;
			bottom: 0;
			right: 0;
		}
	}
</style>
