/**
 * @Desc: eventDecorator
 * @Author: wu xingtgao
 * @Date: 2020/10/29
 */

import eventThrottle from '@/common/utils/throttle'

/**
 * 节流函数
 * @param wait 等待时间
 * @param options 配置
 * @returns {function(*, *, *): void}
 */
export const throttle = function (wait, options = {}) {
  return function (target, name, descriptor) {
    descriptor.value = eventThrottle.throttle(descriptor.value, wait, options)
  }
}
