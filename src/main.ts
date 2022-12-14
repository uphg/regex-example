export const rePhone = /^1[3-9]\d{8,9}$/
export const reAmount = /^(0|([1-9]\d*))(\.\d{1,2})?$/
export const rePercent = /(^[1-9]{0,1}\d{1}(\.\d{1,2})?$)|^100$/

export const reLandline = /^0\d{2,3}-\d{3,4}-?\d{4}$/
export const re400 = /^400-((\d{3}-\d{4})|(\d{2}-\d{5}))$|^400\d-((\d{2}-\d{2}-\d{2})|(\d{3}-\d{3}))$/
export const reEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ // type="email" from W3C
