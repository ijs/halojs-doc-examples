import { RequestUrl, RequestParam, RequestMock } from 'halo-annotation'
import path from 'path'
import conf from '../app.conf'
const getMockName = mockDir => path.resolve(mockDir, path.basename(__filename))
export default class ListController {
    // 获取当前用的订单信息
    @RequestUrl('/list', RequestUrl.GET)
    @RequestParam('text', 'required', '名称')
    @RequestParam('nickname', '*', '昵称')
    @RequestMock(getMockName(conf.mock.dir), conf.mock.enabled)
    async action(ctx, next) {
        ctx.body = `hello ${ctx.getParameter('text')}`
    }
}