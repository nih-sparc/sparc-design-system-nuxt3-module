import { ElMessage, ElNotification } from "element-plus"
/**
 * Success notification message object
 * @param {String} message
 * @return {Object}
 */
 export const successMessage = message => {
  ElMessage({
    showClose: true,
    message: message,
    type: 'success',
    duration: 5000
  })
}
/**
 * Failure notification message object
 * @param {String} message
 * @return {Object}
 */
export const failMessage = message => {
  ElMessage({
    showClose: true,
    message: message,
    type: 'error',
    duration: 5000
  })
}

/**
 * Information notification message object
 * @param {String} message
 * @return {Object}
 */
export const infoMessage = message => {
  ElMessage({
    showClose: true,
    message: message,
    type: 'info',
    duration: 5000
  })
}

/**
* Notification message object
* @param {String} message
* @return {Object}
*/
export const informationNotification = (title, message) => {
  ElNotification({
    title: title,
    message: message,
    showClose: true,
    duration: 5000
 })
}

/**
* Notification message object with icon
* @param {String} message
* @return {Object}
*/
export const iconInformationNotification = (title, message) => {
  ElNotification({
    type: 'info',
    title: title,
    message: message,
    showClose: true,
    duration: 5000
 })
}
