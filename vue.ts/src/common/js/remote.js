import { queryPartners, queryLockUpHolder, queryClients } from '@/api/api'
import { CODE } from '@/api/config'
import { emptyObject } from './until'
/***
 * 执行远程查询--partner
 * @param query
 */
function remotePartner(query) {
  let that = this
  if (query !== '' && query !== undefined && query !== ' ') {
    this.partnerInputValue = query
    setTimeout(() => { // 这个 调用多少次会 执行多少次
      if (this.partnerInputValue === query) {
        this.partnerDataSet = []
        this.partnerDataSet.push({ employeeId: 'Loading' })
        query = query.replace(new RegExp(/[,|;]/g), ' ')
        this.partnerInputValue = this.partnerInputValue.replace(new RegExp(/[,|;]/g), ' ')
        queryPartners({ samAccountName: query, positionType: 1 }).then(res => {
          if (res.code === '0000' && this.partnerInputValue === query) {
            if (!emptyObject(res.result)) {
              that.partnerDataSet = res.result.dataInfo.filter(item => item.employeeId !== '')
            } else {
              this.partnerDataSet = []
              this.partnerDataSet.push({ employeeId: 'NODATA' })
            }
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }, 500) // 连续输入停顿1秒后执行查询
  } else {
    this.partnerInputValue = query
  }
}

function remoteManager(query) {
  let that = this
  if (query !== '' && query !== undefined && query !== ' ') {
    this.managerInputValue = query
    setTimeout(() => { // 这个 调用多少次会 执行多少次
      if (this.managerInputValue === query) {
        this.managerDataSet = []
        this.managerDataSet.push({ employeeId: 'Loading' })
        query = query.replace(new RegExp(/[,|;]/g), ' ')
        this.managerInputValue = this.managerInputValue.replace(new RegExp(/[,|;]/g), ' ')
        queryPartners({ samAccountName: query, positionType: 2 }).then(res => {
          if (res.code === '0000' && this.managerInputValue === query) {
            if (!emptyObject(res.result)) {
              that.managerDataSet = res.result.dataInfo.filter(item => item.employeeId !== '')
            } else {
              this.managerDataSet = []
              this.managerDataSet.push({ employeeId: 'NODATA' })
            }
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }, 500) // 连续输入停顿1秒后执行查询
  } else {
    this.managerInputValue = query
  }
}

/**
 * 远端查询人员信息接口
 * @param {} query
 */
function remotePerson(query) {
  let that = this
  if (query.employeeId) {
    that.personInputValue = query.employeeId
    setTimeout(() => { // 这个 调用多少次会 执行多少次
      searchPerson(that, query.employeeId, 'employeeId', { 'employeeId': query.employeeId })
    }, 500) // 连续输入停顿1秒后执行查询
  } else if (query.samAccountName) {
    that.personInputValue = query.samAccountName
    setTimeout(() => {
      searchPerson(that, query.samAccountName, 'samAccountName', { 'samAccountName': query.samAccountName })
    }, 500)
  } else if (query.profitCentre) {
    that.personInputValue = query.profitCentre
    setTimeout(() => {
      searchPerson(that, query.profitCentre, 'profitCentre', { 'profitCentre': query.profitCentre })
    }, 500)
  }
}

/**
 * 组合条件远端查询人员信息接口
 * @param {} query
 */
function remotePersonByParams(query) {
  // this.historyLocalQuery = query
  let that = this
  let localQuery = {
    department: '',
    displayName: '',
    employeeId: '',
    fullName: '',
    grade: '',
    position: '',
    positionType: 0,
    principalName: '',
    profitCentre: '',
    samAccountName: '',
    telephoneNumber: '',
    title: ''
  }
  Object.assign(localQuery, query)
  that.historyLocalQuery = localQuery
  setTimeout(() => {
    if (that.historyLocalQuery && that.historyLocalQuery.employeeId === localQuery.employeeId &&
      that.historyLocalQuery.samAccountName === localQuery.samAccountName &&
      that.historyLocalQuery.profitCentre === localQuery.profitCentre) {
      that.personDataSet = []

      localQuery.employeeId = localQuery.employeeId.replace(new RegExp(/[,|;]/g), ' ')
      localQuery.samAccountName = localQuery.samAccountName.replace(new RegExp(/[,|;]/g), ' ')
      localQuery.profitCentre = localQuery.profitCentre.replace(new RegExp(/[,|;]/g), ' ')

      that.historyLocalQuery.employeeId = that.historyLocalQuery.employeeId.replace(new RegExp(/[,|;]/g), ' ')
      that.historyLocalQuery.samAccountName = that.historyLocalQuery.samAccountName.replace(new RegExp(/[,|;]/g), ' ')
      that.historyLocalQuery.profitCentre = that.historyLocalQuery.profitCentre.replace(new RegExp(/[,|;]/g), ' ')

      queryPartners(localQuery).then(res => {
        if (res.code === '0000') {
          if (!emptyObject(res.result)) {
            that.personDataSet = res.result.dataInfo.filter(item => item.employeeId !== '')
          } else {
            that.personDataSet = []
          }
        }
      }).catch(err => {
        console.log(err)
      })
    } else {}
  }, 500)
}

function searchPerson(that, param, vmParam, paramObj) {
  if (that.personInputValue === param) {
    that.personDataSet = {}
    that.personDataSet[vmParam] = []
    that.personDataSet[vmParam].push({ searchResult: 'Loading' })
    param = param.replace(new RegExp(/[,|;]/g), ' ')
    that.personInputValue = that.personInputValue.replace(new RegExp(/[,|;]/g), ' ')
    paramObj[vmParam] = that.personInputValue
    queryPartners(Object.assign(paramObj, { positionType: -1 })).then(res => {
      if (res.code === '0000' && that.personInputValue === param) {
        if (!emptyObject(res.result)) {
          that.personDataSet[vmParam] = res.result.dataInfo.filter(item => item.employeeId !== '')
        } else {
          that.personDataSet[vmParam] = []
          that.personDataSet[vmParam].push({ searchResult: 'NODATA' })
        }
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

function remoteLockUpHolder(query) {
  if (query !== '' && query !== undefined && query !== ' ') {
    this.lockUpHolderInputValue = query
    setTimeout(() => {
      if (this.lockUpHolderInputValue === query) {
        this.lockUpDataSet = []
        this.lockUpDataSet.push({ employeeId: 'Loading' })
        query = query.replace(new RegExp(/[,|;]/g), ' ')
        this.lockUpHolderInputValue = this.lockUpHolderInputValue.replace(new RegExp(/[,|;]/g), ' ')
        queryLockUpHolder({ filterName: query }).then(res => {
          if (res.success && this.lockUpHolderInputValue === query) {
            this.lockUpDataSet = res.data.filter(item => item.employeeId !== '')
            // this.lockUpDataSet = res.data
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }, 500)
  }
}

function remoteOtherMembers(query) {
  if (query !== '' && query !== undefined && query !== ' ') {
    this.otherMemberInputValue = query
    setTimeout(() => {
      if (this.otherMemberInputValue === query) {
        this.teamMemberDataSet = []
        this.teamMemberDataSet.push({ employeeId: 'Loading' })
        query = query.replace(new RegExp(/[,|;]/g), ' ')
        this.otherMemberInputValue = this.otherMemberInputValue.replace(new RegExp(/[,|;]/g), ' ')
        queryLockUpHolder({ filterName: query }).then(res => {
          if (res.success && this.otherMemberInputValue === query) {
            this.teamMemberDataSet = []
            if (res.data.length > 0) {
              this.isBtnDisable = false
              this.teamMemberDataSet = res.data.filter(item => item.employeeId !== '')
            }
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }, 500)
  }
}

/**
 * 动态查询客户列表数据
 * @param {} query
 */
function remoteClients(query) {
  let that = this
  this.historyClient = query
  setTimeout(() => {
    if (that.historyClient === query) {
      that.clientDataSet = []
      queryClients({ entityType: 'Company', entityName: query }).then(res => {
        if (res.code === '0000') {
          if (!emptyObject(res.result) && !emptyObject(res.result.data)) {
            console.log(res.result)
            that.clientDataSet = res.result.data.filter(item => item.companyName !== '')
          } else {
            that.clientDataSet = []
          }
        }
      }).catch(err => {
        console.log(err)
      })
    } else {}
  }, 500)
}

export {
  remotePartner,
  remoteLockUpHolder,
  remoteOtherMembers,
  remoteManager,
  remotePerson,
  remotePersonByParams,
  remoteClients
}