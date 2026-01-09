/**
 * 等待指定时间
 * @param ms 等待时间（毫秒）
 * @returns {Promise<void>} 等待完成的 Promise
 */
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}