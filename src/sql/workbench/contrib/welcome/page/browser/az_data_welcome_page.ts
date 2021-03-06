/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { escape } from 'vs/base/common/strings';
import { localize } from 'vs/nls';

export default () => `
<div class="welcomePageContainer">
	<div class="welcomePage">
		<div class="ads-homepage splash">
			<div class="gradient">
				<div class="preview-text tool-tip">
					<div class="tool-tip-container" id="tool-tip-container-wide">
						<a class="ads-welcome-page-link" aria-describedby="tooltip-text-wide" id="preview-link-wide" class="preview-link" tabindex="0" name="preview"><p>Preview</p><i class="icon-info themed-icon"></i></a>
						<span role="tooltip" id="tooltip-text-wide" class="tool-tip-text" aria-hidden="true">
							<h3 tabindex="0" class="preview-tooltip-header">${escape(localize('welcomePage.previewHeader', "This page is in preview"))}</h3>
							<p tabindex="0" class="preview-tooltip-body">${escape(localize('welcomePage.previewBody', "Preview features introduce new functionalities that are on track to becoming a permanent part the product. They are stable, but need additional accessibility improvements. We welcome your early feedback while they are under development."))}</p>
						</span>
					</div>
					<div class="tool-tip-container" id="tool-tip-container-narrow">
						<a class="ads-welcome-page-link" aria-haspopup="true" class="preview-link" tabindex="0" id="preview-link-narrow" name="previewNarrow"><p>Preview</p><i class="icon-info themed-icon"></i></a>
					</div>
				</div>
				<div id="preview-modal" class="modal" aria-modal="true" aria-hidden="true">
					<div class="modal-content">
						<span class="close-icon">x</span>
						<h3 tabindex="0" class="preview-modal-header">${escape(localize('welcomePage.previewHeader', "This page is in preview"))}</h3>
						<p tabindex="0" class="preview-modal-body">${escape(localize('welcomePage.previewBody', "Preview features introduce new functionalities that are on track to becoming a permanent part the product. They are stable, but need additional accessibility improvements. We welcome your early feedback while they are under development."))}</p>
					</div>
				</div>
				<div class="ads-homepage-section section header hero">
					<div class="row start">
						<div class="header-top-nav">
							<div class="flex">
								<div class="icon sm"></div>
								<div class="title">
									<div class="caption-container">
										<span class="icon xs"></span><h1 class="caption"></h1>
									</div>
									<div class="flex btn-container">
										<div>
											<button id="dropdown-btn" class="btn btn-primary dropdown" role="navigation" aria-haspopup="true" aria-controls="dropdown">
												<div class="dropdown-text" style="pointer-events: none;">
													<span>${escape(localize('welcomePage.new', "New"))}</span><i class="icon-arrow-down"></i>
												</div>
											</button>
											<nav role="navigation" class="dropdown-nav">
												<ul id="dropdown" class="dropdown-content" aria-hidden="true" aria-label="submenu" role="menu" aria-labelledby="dropdown-btn">
													<li role="none"><a class="ads-welcome-page-link" role="menuitem" tabIndex="-1" class="move" href="command:registeredServers.addConnection">${escape(localize('welcomePage.newConnection', "New connection"))}</a></li>
													<li role="none"><a class="ads-welcome-page-link" role="menuitem" tabIndex="-1" class="move" href="command:workbench.action.files.newUntitledFile">${escape(localize('welcomePage.newQuery', "New query"))}</a></li>
													<li role="none"><a class="ads-welcome-page-link" role="menuitem" tabIndex="-1" class="move" href="command:notebook.command.new">${escape(localize('welcomePage.newNotebook', "New notebook"))}</a></li>
													<li role="none" id="dropdown-mac-only"><a class="ads-welcome-page-link" role="menuitem" tabIndex="-1" class="move mac-only" href="command:workbench.action.files.openLocalFileFolder">${escape(localize('welcomePage.openFileMac', "Open file"))}</a></li>
													<li role="none" id="dropdown-windows-linux-only"><a class="ads-welcome-page-link" role="menuitem" tabIndex="-1" class="move windows-only linux-only" href="command:workbench.action.files.openFile">${escape(localize('welcomePage.openFileLinuxPC', "Open file"))}</a></li>
												</ul>
											</nav>
										</div>
										<a class="windows-only linux-only btn btn-secondary"
											href="command:workbench.action.files.openFile">
											${escape(localize('welcomePage.openFileLinuxPC', "Open file"))}
										</a>
										<a class="mac-only btn btn-secondary" href="command:workbench.action.files.openLocalFileFolder">${escape(localize('welcomePage.openFileMac', "Open file"))}</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row header-bottom-nav-tiles ads-grid">
						<div class="col">
							<a class="header-bottom-nav-tile-link ads-welcome-page-link" href="command:registeredServers.addConnection">
								<div class="header-bottom-nav-tile tile tile-connection">
									<h3>${escape(localize('welcomePage.createConnection', "Create a connection"))}</h3>
									<p>${escape(localize('welcomePage.createConnectionBody', "Connect to a database instance through the connection dialog."))}</p>
									<div class="icon connection"></div>
								</div>
							</a>
						</div>
						<div class="col">
							<a class="header-bottom-nav-tile-link ads-welcome-page-link"
								href="command:workbench.action.files.newUntitledFile">
								<div class="header-bottom-nav-tile tile tile-query">
									<h3>${escape(localize('welcomePage.runQuery', "Run a query"))}</h3>
									<p>${escape(localize('welcomePage.runQueryBody', "Interact with data through a query editor."))}</p>
									<div class="icon query"></div>
								</div>
							</a>
						</div>
						<div class="col">
							<a class="header-bottom-nav-tile-link ads-welcome-page-link" href="command:notebook.command.new">
								<div class="header-bottom-nav-tile tile tile-notebook">
									<h3>${escape(localize('welcomePage.createNotebook', "Create a notebook"))}</h3>
									<p>${escape(localize('welcomePage.createNotebookBody', "Build a new notebook using a native notebook editor."))}</p>
									<div class="icon notebook"></div>
								</div>
							</a>
						</div>
						<div class="col">
							<a class="header-bottom-nav-tile-link ads-welcome-page-link" href="command:azdata.resource.deploy">
								<div class="header-bottom-nav-tile tile tile-server">
									<h3>${escape(localize('welcomePage.deployServer', "Deploy a server"))}</h3>
									<p>${escape(localize('welcomePage.deployServerBody', "Create a new instance of SQL Server on the platform of your choice."))}</p>
									<div class="icon server"></div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="ads-homepage-section middle-section content row ads-grid">
				<div class="resources-container">
					<h2>${escape(localize('welcomePage.resources', "Resources"))}</h2>
					<div class="tabs">
						<input class="input" name="tabs" type="radio" id="tab-1" checked="checked" />
						<label class="label" for="tab-1" tabIndex="0">${escape(localize('welcomePage.history', "History"))}</label>
						<div class="panel">
							<div class="recent history">
								<div class="flex list-header-container">
									<i class="icon-document themed-icon"></i>
									<h4 class="list-header">${escape(localize('welcomePage.name', "Name"))}</h4>
									<h4 class="list-header-last-opened">${escape(localize('welcomePage.lastOpened', "Last Opened"))}</h4>
								</div>
								<ul class="list">
									<!-- Filled programmatically -->
								</ul>
								<p class="none detail">No recent folders</p>
								<ul class="moreRecent-list">
									<li class="moreRecent">
										<a class="ads-welcome-page-link" href="command:workbench.action.openRecent">${escape(localize('welcomePage.moreRecent', "Show more"))}
											<i class="icon-arrow-down-dark"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<p class="showOnStartup"><input type="checkbox" id="showOnStartup" class="checkbox">
						<label for="showOnStartup">${escape(localize('welcomePage.showOnStartup', "Show welcome page on startup"))}</label>
					</p>
				</div>
				<div class="getting-started-container">
					<div class="links">
						<h2>${escape(localize('welcomePage.usefuLinks', "Useful Links"))}</h2>
						<div class="link-header">
							<a class="link ads-welcome-page-link"
								href="https://aka.ms/get-started-azdata">${escape(localize('welcomePage.gettingStarted',
	"Getting Started"))}<span class="icon-link themed-icon-alt"></a>
						</div>
						<p>
						${escape(localize('welcomePage.gettingStartedBody',
		"Discover the capabilities offered by Azure Data Studio and learn how to make the most of them."))}
						</p>
						<div class="link-header">
							<a class="link ads-welcome-page-link"
								href="command:workbench.action.openDocumentationUrl">${escape(localize('welcomePage.documentation',
			"Documentation"))}<span class="icon-link themed-icon-alt"</a></a>
						</div>
						<p>${escape(localize('welcomePage.documentationBody',
				"Visit the documentation center for quickstarts, how-to guides, and references for PowerShell, APIs, etc."))}
						</p>


						<div class="videos-container row">
							<h2>Videos</h2>
							<div class="flex flex-container-video">
								<div class="videos-container-video">
									<a href="https://www.youtube.com/watch?v=Orv7fptVoUA" class="video overview ads-welcome-page-link">
									<img src="${require.toUrl('./../../media/video_overview.png')}" class="video-overview" id="video-overview" />
										<h4>${escape(localize('welcomePage.videoDescriptionOverview',
					"Overview of Azure Data Studio"))}</h4>
									</a>

								</div>
								<div class="videos-container-video">
									<a href="https://www.youtube.com/watch?v=Nt4kIHQ0IOc" class="video overview ads-welcome-page-link">
									<img src="${require.toUrl('./../../media/video_introduction.png')}" class="video-introduction" id="video-introduction" />
										<h4>${escape(localize('welcomePage.videoDescriptionIntroduction',
						"Introduction to Azure Data Studio Notebooks | Data Exposed"))}</h4>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ads-homepage-section content extensions">
				<div class="flex flex-j-between">
					<h2>Extend your data studio</h2>
					<a class="link-show-all flex ads-welcome-page-link" href="command:extensions.listView.focus">${escape(localize('welcomePage.showAll', "Show All"))} <span class="icon-arrow-right"></span></a>
				</div>
				<div class="row ads-grid grip-gap-50">
					<div
						class="ads-grid tile no-hover extension-pack">
						<div class="extension-pack-description">
							<div class="extension-pack-header"></div>
							<p class="extension-pack-body"></p>
						</div>
						<div class="extension-pack-extensions flex flex-d-column flex-j-evenly flex-a-start">
							<div class="extension-pack-extension-list flex flex-d-column flex-j-evenly flex-a-start"></div>
							<div class="flex flex-j-end extension-pack-btn-container flex flex-j-between flex-a-center"">
							<div class="extensionPack" href="#"></div>
							<a class="a-self-end link-learn-more flex flex-a-center ads-welcome-page-link" href="command:azdata.extension.open?%7B%22id%22%3A%22microsoft.admin-pack%22%7D">${escape(localize('welcomePage.learnMore',
							"Learn more "))}<span class="icon-arrow-right"></span></a>
						</div>
					</div>
				</div>
				<div class="extension-list flex flex-d-column">
					<!-- Dynamically populated -->
				</div>
				<br /><br /><br />
			</div>
		</div>
	</div>
</div>
`;
