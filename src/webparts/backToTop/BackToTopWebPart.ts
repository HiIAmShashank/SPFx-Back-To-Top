import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { type IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { initializeIcons } from '@fluentui/react';
import BackToTop from './components/BackToTop';

export default class BackToTopWebPart extends BaseClientSideWebPart<Record<string, never>> {

  public render(): void {
    ReactDom.render(React.createElement(BackToTop), this.domElement);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
    initializeIcons();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return { pages: [] };
  }
}
