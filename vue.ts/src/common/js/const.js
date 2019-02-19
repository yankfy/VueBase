// 角色常量
export const KPMG_TAX_STAFF = 'kpmg_tax_staff'
export const KPMG_ADMIN = 'kpmg_admin'
export const APPROVER = 'approver'
export const GENERAL_STAFF = 'general_staff'
export const KPMG_KDC_STAFF = 'kpmg_kdc_staff'
export const KPMG_SPECIAL_STAFF = 'kpmg_special_staff'

export function monthDataSet(that) {
  return [
    { label: that.$t('month.Jan'), value: '0' },
    { label: that.$t('month.Feb'), value: '1' },
    { label: that.$t('month.Mar'), value: '2' },
    { label: that.$t('month.Apr'), value: '3' },
    { label: that.$t('month.May'), value: '4' },
    { label: that.$t('month.Jun'), value: '5' },
    { label: that.$t('month.Jul'), value: '6' },
    { label: that.$t('month.Aug'), value: '7' },
    { label: that.$t('month.Sep'), value: '8' },
    { label: that.$t('month.Oct'), value: '9' },
    { label: that.$t('month.Nov'), value: '10' },
    { label: that.$t('month.Dec'), value: '11' }
  ]
}

export const yearDataSet = ['2014', '2015', '2016', '2017', '2018']

export const APPLICATIONID = 3