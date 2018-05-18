import { createNumberMask } from 'text-mask-addons/dist/textMaskAddons';
import { RegExpService } from '../services/reg-exp.service';

export class Mask {

  public static CVCnumber = createNumberMask( {
    allowDecimal: false,
    thousandsSeparatorSymbol: '',
    prefix: '',
    suffix: '',
    allowNegative: false
  });

  public static CVC = {
    // mask: Mask.CVCnumber,
    mask: RegExpService.CVC,
    guide: false,
    modelClean: true
  };

  public static cardNumber = {
    mask: RegExpService.cardNumber
  };

  public static expiration = {
    mask: RegExpService.expiration
  };
}
