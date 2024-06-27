import request from '../util/request'

// banner列表
export function reqDataCollect(p) {
  return request({
    url: '/anon/dataCollect/promotionDataRecord?p=' + p,
    method: 'get',
  })
}
