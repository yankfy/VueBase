import { ERROR_MESSAGES } from '@/store/const'

const exceptionHandle = (error, vm, store) => {
  if (error.status === 400) {
    const details = error.data.fieldsError
    const errorCode = error.data.errCode
    let errorMsgs = []
    if (errorCode !== 'ERR_SYS_COM_002') {
      let errorMsg = vm.$t(`exception.businessError.${errorCode}`)
      if (errorMsg.indexOf(errorCode) !== -1) {
        errorMsg = vm.$t(`exception.requestInvalid`)
      }
      errorMsgs.push(errorMsg)
    } else if (errorCode === 'ERR_SYS_COM_002' && details) {
      Object.keys(details).forEach(key => {
        errorMsgs.push(vm.$t(`exception.businessError.${details[key]}`))
      })
    }
    store.commit(ERROR_MESSAGES, { data: errorMsgs })
  } else if (error.status === 403) {
    vm.error(vm.$t(`exception.operationNotAllowed`))
  } else {
    vm.error(vm.$t(`exception.internalSystemError`))
  }
}

export {
  exceptionHandle
}