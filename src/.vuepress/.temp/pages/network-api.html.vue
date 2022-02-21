<template><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p><a href="https://github.com/NaturalSelectionLabs/Pixltonian-Pre-Node" target="_blank" rel="noopener noreferrer">Source code<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/NaturalSelectionLabs/Pixltonian/blob/main/versions/v0.3.1.md" target="_blank" rel="noopener noreferrer"><img src="https://badge.Pixltonian.workers.dev/?version=v0.3.1" alt="Pixltonian"><ExternalLinkIcon/></a></p>
<p>While actively working on our ultimate goal, a fully decentralized node, a temporarily centralized version is currently available, you can use <a href="https://prenode.Pixltonian.dev" target="_blank" rel="noopener noreferrer">https://prenode.Pixltonian.dev<ExternalLinkIcon/></a> as the node entry point.</p>
<h2 id="supported-name-service" tabindex="-1"><a class="header-anchor" href="#supported-name-service" aria-hidden="true">#</a> Supported name service</h2>
<p>Same as <a href="https://github.com/NaturalSelectionLabs/Web3-Name-Service" target="_blank" rel="noopener noreferrer">Web3 Name Service<ExternalLinkIcon/></a></p>
<ul>
<li>ENS: *.eth</li>
<li>DAS: *.bit</li>
<li>RNS: *.Pixltonian</li>
</ul>
<h2 id="supported-account" tabindex="-1"><a class="header-anchor" href="#supported-account" aria-hidden="true">#</a> Supported account</h2>
<ul>
<li>EVM+</li>
<li>Twitter</li>
<li>Misskey</li>
<li>Jike</li>
</ul>
<h2 id="supported-auto-assets" tabindex="-1"><a class="header-anchor" href="#supported-auto-assets" aria-hidden="true">#</a> Supported auto assets</h2>
<ul>
<li>Gitcoin.Donation</li>
<li>xDai.POAP</li>
<li>BSC.NFT</li>
<li>Ethereum.NFT</li>
<li>Polygon.NFT</li>
<li>Mirror.XYZ (to be removed)</li>
</ul>
<h2 id="supported-auto-items" tabindex="-1"><a class="header-anchor" href="#supported-auto-items" aria-hidden="true">#</a> Supported auto items</h2>
<ul>
<li>Gitcoin.Donation</li>
<li>xDai.POAP</li>
<li>BSC.NFT</li>
<li>Ethereum.NFT</li>
<li>Polygon.NFT</li>
<li>Mirror.XYZ</li>
<li>Twitter</li>
<li>Misskey</li>
<li>Jike</li>
</ul>
<h2 id="api-1" tabindex="-1"><a class="header-anchor" href="#api-1" aria-hidden="true">#</a> API</h2>
<ul>
<li>GET <code>/:fid</code> - get a file</li>
</ul>
<p>Example:</p>
<p>Get <code>0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944</code> index file</p>
<p><a href="https://prenode.Pixltonian.dev/0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944" target="_blank" rel="noopener noreferrer">https://prenode.Pixltonian.dev/0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944<ExternalLinkIcon/></a></p>
<ul>
<li>PUT <code>/</code> - change a file</li>
</ul>
<p>Body parameter</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Optional</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>files</td>
<td>false</td>
<td>Array of files' contents</td>
</tr>
</tbody>
</table>
<ul>
<li>GET <code>/assets/details</code></li>
</ul>
<p>Get details of the assets</p>
<p>Query parameter</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Optional</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>assets</td>
<td>false</td>
<td>The ids of wanted assets, separated by commas</td>
</tr>
<tr>
<td>full</td>
<td>true</td>
<td>Whether to return detailed information</td>
</tr>
</tbody>
</table>
<p>Example:</p>
<p>Get details of two assets <code>EVM+-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Ethereum.NFT-0xacbe98efe2d4d103e221e04c76d7c55db15c8e89.5</code> and <code>EVM+-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Polygon.NFT-0x548cee4ee43ecd2fb4716c490d3da315069d8114.3</code></p>
<p><a href="https://prenode.Pixltonian.dev/assets/details?assets=EVM%2B-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Ethereum.NFT-0xacbe98efe2d4d103e221e04c76d7c55db15c8e89.5,EVM%2B-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Polygon.NFT-0x548cee4ee43ecd2fb4716c490d3da315069d8114.3&amp;full=1" target="_blank" rel="noopener noreferrer">https://prenode.Pixltonian.dev/assets/details?assets=EVM%2B-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Ethereum.NFT-0xacbe98efe2d4d103e221e04c76d7c55db15c8e89.5,EVM%2B-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Polygon.NFT-0x548cee4ee43ecd2fb4716c490d3da315069d8114.3&amp;full=1<ExternalLinkIcon/></a></p>
<ul>
<li>GET <code>/items/list</code></li>
</ul>
<p>Get the aggregated auto and custom items, sorted by time</p>
<p>Query parameter</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Optional</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>limit</td>
<td>true</td>
<td>Limit on the number of lists</td>
</tr>
<tr>
<td>tsp</td>
<td>true</td>
<td>Time in RFC 3339 format, returns items before this time</td>
</tr>
<tr>
<td>persona</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>linkID</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>fieldLike</td>
<td>true</td>
<td>Filters for target.field, separated by commas</td>
</tr>
</tbody>
</table>
<p>Example:</p>
<p>Get aggregated items of <code>0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944</code></p>
<p><a href="https://prenode.Pixltonian.dev/items/list?limit=5&amp;persona=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944" target="_blank" rel="noopener noreferrer">https://prenode.Pixltonian.dev/items/list?limit=5&amp;persona=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944<ExternalLinkIcon/></a></p>
<p>Get aggregated items of personas who followed by <code>0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944</code></p>
<p><a href="https://prenode.Pixltonian.dev/items/list?limit=5&amp;persona=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944&amp;linkID=following" target="_blank" rel="noopener noreferrer">https://prenode.Pixltonian.dev/items/list?limit=5&amp;persona=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944&amp;linkID=following<ExternalLinkIcon/></a></p>
<p>Get NFT and Gitcoin related aggregated items of <code>0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944</code></p>
<p><a href="https://prenode.Pixltonian.dev/items/list?limit=5&amp;persona=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944&amp;fieldLike=NFT,Gitcoin" target="_blank" rel="noopener noreferrer">https://prenode.Pixltonian.dev/items/list?limit=5&amp;persona=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944&amp;fieldLike=NFT,Gitcoin<ExternalLinkIcon/></a></p>
<ul>
<li>GET <code>/profile/list</code></li>
</ul>
<p>Get profile of given persona list</p>
<p>Query parameter</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Optional</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>personas</td>
<td>false</td>
<td>Array of files' contents</td>
</tr>
</tbody>
</table>
<p>Example:</p>
<p>Get profile of <code>0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944</code> and <code>0xee8fEeb6D0c2fC02Ef41879514A75d0E791b5061</code></p>
<p><a href="https://prenode.Pixltonian.dev/profile/list?personas=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944,0xee8fEeb6D0c2fC02Ef41879514A75d0E791b5061" target="_blank" rel="noopener noreferrer">https://prenode.Pixltonian.dev/profile/list?personas=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944,0xee8fEeb6D0c2fC02Ef41879514A75d0E791b5061<ExternalLinkIcon/></a></p>
</template>
