/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as appservice from 'vscode-azureappservice';
import { IActionContext } from 'vscode-azureextensionui';
import { SiteTreeItem } from '../../explorer/SiteTreeItem';
import { TrialAppTreeItem } from '../../explorer/TrialAppTreeItem';
import { WebAppTreeItem } from '../../explorer/WebAppTreeItem';
import { ext } from '../../extensionVariables';

export async function stopStreamingLogs(context: IActionContext, node?: SiteTreeItem): Promise<void> {
    if (!node) {
        node = await ext.tree.showTreeItemPicker<WebAppTreeItem>([WebAppTreeItem.contextValue, TrialAppTreeItem.contextValue], context);
    }

    await appservice.stopStreamingLogs(node.root.client);
}