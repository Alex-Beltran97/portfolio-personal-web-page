export class ModalInfo {
  private static instance: ModalInfo;

  public isOpened: boolean = false;

  public static setInstance () {
    if(!ModalInfo.instance) {
      ModalInfo.instance = new ModalInfo();

      return ModalInfo.instance;
    };

    return ModalInfo.instance;
  };

  public openCloseModal() : void {
    this.isOpened = !this.isOpened;
  };
};