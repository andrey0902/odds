import { createNumberMask } from 'text-mask-addons/dist/textMaskAddons';

export class Mask {

  public static amountMaskFnc = createNumberMask({
    allowDecimal: true,
    thousandsSeparatorSymbol: '',
    prefix: '',
    suffix: ''
  });

  public static numberDecimal = {
    mask: Mask.amountMaskFnc,
    guide: false,
    modelClean: true
  };
}
