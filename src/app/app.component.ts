import {Component} from '@angular/core';
import {ServiceStoreService} from "./service-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private companyStore: ServiceStoreService) {
  }

  popupComplited = true;

  /**
   * Закрытие cookie block
   */
  public close() {
    this.popupComplited = false;
  }

  /*header*/

  getheadText() {
    return this.companyStore.getheadText()
  }

  getheadNav() {
    return this.companyStore.getheadNav()
  }

  /**
   * клик по элементам clickOnHeader
   */
  public clickOnHeader({detail}) {
    return console.log('clickOnHeader:', detail)
  }

  /*header*/

  /*productPresentation*/
  getproductPresentation() {
    return this.companyStore.getproductPresentation()
  }

  /**
   * клик по элементам ProductPresentation
   */
  public clickOnProductPresentation({detail}) {
    return console.log('ProductPresentation:', detail)
  }

  /*productPresentation*/

  /*personalSecurity*/

  getppersonalSecurityImg() {
    return this.companyStore.getppersonalSecurity().personalSecurityImg;
  }

  getppersonalSecurity() {
    return this.companyStore.getppersonalSecurity();
  }

  /**
   * клик по элементам personalSecurity
   */
  public clickOnPersonalSecurity({detail}) {
    return console.log('personalSecurity:', detail)
  }

  /*personalSecurity*/


  /*expenseManagement*/

  getexpenseManagementImg() {
    return this.companyStore.getexpenseManagement().expenseManagementImg;
  }

  getexpenseManagement() {
    return this.companyStore.getexpenseManagement();
  }

  /**
   * клик по элементам ExpenseManagement
   */
  public clickOnExpenseManagement({detail}) {
    return console.log('ExpenseManagement:', detail)
  }

  /*expenseManagement*/

  /*clauseMatch*/
  getclauseMatch() {
    return this.companyStore.getclauseMatch();
  }

  /**
   * клик по элементам ClauseMatch
   */
  public clickOnClauseMatch({detail}) {
    return console.log('ClauseMatch:', detail)
  }

  /*clauseMatch*/

  /*securityControl*/
  getsecurityControlImg() {
    return this.companyStore.getsecurityControl().securityControlImg;
  }

  getsecurityControl() {
    return this.companyStore.getsecurityControl();
  }

  /**
   * клик по элементам SecurityControl
   */
  public clickOnSecurityControl({detail}) {
    return console.log('SecurityControl:', detail)
  }

  /*securityControl*/


  /*CardDesign*/
  getcardDesign() {
    return this.companyStore.getcardDesign();
  }

  /**
   * клик по элементам CardDesign
   */
  public clickOnCardDesign({detail}) {
    return console.log('CardDesign:', detail)
  }

  /*CardDesign*/


  /*otherFeatures*/
  getotherFeatures() {
    return this.companyStore.getotherFeatures();
  }

  getfeaturesblock() {
    return this.companyStore.getotherFeatures().featuresblock;
  }

  /**
   * клик по элементам OtherFeatures
   */
  public clickOnOtherFeatures({detail}) {
    return console.log('OtherFeatures:', detail)
  }

  /*otherFeatures*/

  /*ExploreFeature*/
  getExploreFeature() {
    return this.companyStore.getexploreFeatures();
  }

  /**
   * клик по элементам ExploreFeature
   */
  public clickOnExploreFeature({detail}) {
    return console.log('ExploreFeature:', detail)
  }

  /*ExploreFeature*/

  /*linkBlock*/
  getlinkBlock() {
    return this.companyStore.getlinkBlock();
  }

  /**
   * клик по элементам LinkBlock
   */
  public clickOnLinkBlock({detail}) {
    return console.log('LinkBlock:', detail)
  }

  /*linkBlock*/

  /*IconsBlock*/

  getpreviewBackground() {
    return this.companyStore.getpreviewBackground().previewBackgroundBlock;
  }


  /**
   * клик по элементам clickOnIconsBlock
   */
  public clickOnIconsBlock({detail}) {
    return console.log('clickOnIconsBlock:', detail)
  }

  /*IconsBlock*/

  /*IconsBlock*/

  getfooter() {
    return this.companyStore.getfooter();
  }

  /*IconsBlock*/

}
