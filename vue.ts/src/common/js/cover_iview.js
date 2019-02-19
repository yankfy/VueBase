import moment from 'moment'

const InputCover = (iView) => {
  // 默认Input的clearable为需要显示
  iView.Input.props.clearable.default = true
  // 当点击删除按钮之后，鼠标回到input框中
  iView.Input.methods.handleClear = function() {
    this.$refs.input.focus()
    const e = { target: { value: '' } }
    this.$emit('input', '')
    this.setCurrentValue('')
    this.$emit('on-change', e)
  }
  // 解决disabled的情况下，删除按钮会显示
  iView.Input.computed.wrapClasses = function() {
    const prefixCls = this.prefixCls
    return [
      `${prefixCls}-wrapper`,
      {
        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
        [`${prefixCls}-type`]: this.type,
        [`${prefixCls}-group`]: this.prepend || this.append || (this.search && this.enterButton),
        [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append || (this.search && this.enterButton)) && !!this.size,
        [`${prefixCls}-group-with-prepend`]: this.prepend,
        [`${prefixCls}-group-with-append`]: this.append || (this.search && this.enterButton),
        [`${prefixCls}-hide-icon`]: this.append,
        [`${prefixCls}-with-search`]: (this.search && this.enterButton),
        'kpmg-input-wrapper-disabled': this.disabled
      }
    ]
  }
}

const FormCover = (iView) => {
  // rules在修改的时候会触发validator校验，这个处理有合理性
  // 但是我们的国际化会触发rules的修改，这里将这个watch给重置掉，需要的时候在各自页面添加
  iView.Form.watch.rules = () => {}
}

const SelectCover = (iView) => {
  iView.Select.methods.onClickOutside = function(event) {
    if (this.visible) {
      if (event.type === 'mousedown') {
        event.preventDefault()
        return
      }
      if (this.transfer) {
        const { $el } = this.$refs.dropdown
        if ($el === event.target || $el.contains(event.target)) {
          return
        }
      }
      if (this.filterable) {
        const input = this.$el.querySelector('input[type="text"]')
        this.caretPosition = input.selectionStart
        this.$nextTick(() => {
          const caretPosition = this.caretPosition === -1 ? input.value.length : this.caretPosition
          input.setSelectionRange(caretPosition, caretPosition)
        })
        // 点击select框外面的时候清空filter输入的值
        this.setQuery(null)
      }
      if (!this.autoComplete) event.stopPropagation()
      event.preventDefault()
      this.hideMenu()
      this.isFocused = true
    } else {
      this.caretPosition = -1
      this.isFocused = false
    }
  }
}

const DatePickerCover = (iView) => {
  iView.DatePicker.mixins[0].props.clearable.default = true
  iView.DatePicker.mixins[0].components.iInput.props.clearable.default = false
  iView.DatePicker.mixins[0].methods.handleInputChange = function() {
    const isArrayValue = this.type.includes('range') || this.multiple
    const oldValue = this.visualValue
    let newValue = event.target.value
    // 单独处理清空操作，不考虑多日期的情况
    if (newValue === '') {
      this.internalValue = []
      return
    }
    // 目前没有range框，暂时不处理range的情况，降低复杂度
    if (!isArrayValue) {
      let format = this.format || 'yyyy-MM-dd'
      newValue = moment(newValue).format(format.toUpperCase())
    }
    const newDate = this.parseDate(newValue)
    const disabledDateFn =
      this.options &&
      typeof this.options.disabledDate === 'function' &&
      this.options.disabledDate
    const valueToTest = isArrayValue ? newDate : newDate[0]
    const isDisabled = disabledDateFn && disabledDateFn(valueToTest)
    const isValidDate = newDate.reduce((valid, date) => valid && date instanceof Date, true)
    if (newValue !== oldValue && !isDisabled && isValidDate) {
      this.emitChange(this.type)
      this.internalValue = newDate
    } else {
      // 当日期变化且变化后的日期不是有效日期的时候，就清空
      if (newValue !== oldValue && !isValidDate) {
        this.internalValue = []
      }
      this.forceInputRerender++
    }
  }
}

const PageCover = (iView) => {
  iView.Page.props.pageSizeOpts.default = () => {
    return [10, 20, 30, 40, 50, 100]
  }
  // 原来的page如果切换的时候，会把当前页设置成第一页，不符合目前的要求，所以处理一下
  iView.Page.methods.onSize = function(pageSize) {
    this.currentPageSize = pageSize
    this.$emit('on-page-size-change', pageSize)
  }
}

const iviewCover = (iView) => {
  InputCover(iView)
  FormCover(iView)
  SelectCover(iView)
  DatePickerCover(iView)
  PageCover(iView)
}

export {
  iviewCover
}