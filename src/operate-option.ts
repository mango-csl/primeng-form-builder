/**
 * Created by moudousiin on 2017/5/2.
 */
export class OperateOption<T> {
  type:string;
  data:any;

  constructor(options: {
    type?:string,
    data?:any
  } = {}) {
    this.type = options.type;
    this.data = options.data || null;
  }
}
