const getters = {
  token: state => state.user.token,
  pageIndex: state => state.home.pageIndex,
  avatar: state => state.user.userInfo.iconUrl,
  teamImg: state => state.user.userInfo.teamImg,
  fullName: state => state.user.userInfo.fullName,
  introduce: state => state.user.userInfo.introduce,
  phone: state => state.user.userInfo.phone,
  email: state => state.user.userInfo.email,
  visitNum: state => state.user.visitInfo.visitNum,
  recentVisitTime: state => state.user.visitInfo.recentVisitTime,
}
export default getters
