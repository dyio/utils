const province = /(1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[1-2])/

const year = /(19|20)\d{2}/

const month = /(0[1-9]|1[0-2])/

const date = /(0[1-9]|[1-2][0-9]|3[0-1])/

const reg = /^(1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[1-2])\d{4}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}[\dxX]$/

export default function checkIdentity (id) {
  return reg.test(id)
}
