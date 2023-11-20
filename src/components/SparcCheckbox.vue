<template>
    <el-checkbox
      :label="label"
      :disabled="disabled"
      modelValue="current"
    >
      {{ display }}
    </el-checkbox>
  </template>
  
  <script>
  export default {
    name: 'SparcCheckbox',
  
    props: {
      value: {
        type: Array,
        required: true
      },
      label: {
        type: [String, Number, Boolean],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      display: {
        type: [String, Number],
        required: true
      }
    },
  
    computed: {
      current: {
        get: function() {
          return this.value
        },
        set: function(val) {
          this.$emit('input', val)
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/_variables.scss';
  :deep(.el-checkbox__label) {
    color: $grey;
  }
  :deep(.el-checkbox__input) {
    &.is-disabled {
      &.is-checked {
        .el-checkbox__inner {
          background-color: #909399;
          &::after {
            border-color: white;
            opacity: 80%;
          }
        }
      }
    }
    &:not(.is-checked) {
      .el-checkbox__inner {
        border-color: $lightGrey;
      } 
    }
  }
  
  .el-checkbox {
    margin-left: 0;
    padding-top: 5px;
    &:first-child {
      padding-top: 0;
    }
  }
  </style>