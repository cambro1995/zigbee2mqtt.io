"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79579],{21441:(e,n,t)=>{t.r(n),t.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-3aa7689b","path":"/devices/TI0001-dimmer.html","title":"Livolo TI0001-dimmer control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Livolo TI0001-dimmer control via MQTT","description":"Integrate your Livolo TI0001-dimmer via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-02-05T19:15:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Important","slug":"important","link":"#important","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669823827000},"filePathRelative":"devices/TI0001-dimmer.md"}')},55712:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var s=t(66252);const a=(0,s._)("h1",{id:"livolo-ti0001-dimmer",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#livolo-ti0001-dimmer","aria-hidden":"true"},"#"),(0,s.Uk)(" Livolo TI0001-dimmer")],-1),o=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th")])],-1),i=(0,s._)("tr",null,[(0,s._)("td",null,"Model"),(0,s._)("td",null,"TI0001-dimmer")],-1),l=(0,s._)("td",null,"Vendor",-1),d=(0,s._)("tr",null,[(0,s._)("td",null,"Description"),(0,s._)("td",null,"Zigbee dimmer")],-1),r=(0,s._)("tr",null,[(0,s._)("td",null,"Exposes"),(0,s._)("td",null,"light (state, brightness), linkquality")],-1),c=(0,s._)("tr",null,[(0,s._)("td",null,"Picture"),(0,s._)("td",null,[(0,s._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TI0001-dimmer.jpg",alt:"Livolo TI0001-dimmer"})])],-1),u=(0,s._)("h2",{id:"notes",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,s.Uk)(" Notes")],-1),p=(0,s._)("h3",{id:"important",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#important","aria-hidden":"true"},"#"),(0,s.Uk)(" Important")],-1),h=(0,s.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ext_pan_id</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">117</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>\n  <span class="token key atrule">channel</span><span class="token punctuation">:</span> <span class="token number">26</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Therefore these devices may not co-existence with other Zigbee devices. Maybe, you need to add a dedicated coordinator and create a new network for Livolo. If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">pan_id</span><span class="token punctuation">:</span> <span class="token number">6756</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),m=(0,s.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),g={},v=(0,t(83744).Z)(g,[["render",function(e,n){const t=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.kq)(" !!!! "),(0,s.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,s.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,s.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,s.kq)(" !!!! "),a,(0,s._)("table",null,[o,(0,s._)("tbody",null,[i,(0,s._)("tr",null,[l,(0,s._)("td",null,[(0,s.Wm)(t,{to:"/supported-devices/#v=Livolo"},{default:(0,s.w5)((()=>[(0,s.Uk)("Livolo")])),_:1})])]),d,r,c])]),(0,s.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,s._)("p",null,[(0,s.Uk)('After pairing device will be shown as "TI0001" device. Need to manually trigger a re-configure of the device either using web-frontend of Zigbee2MQTT or using '),(0,s.Wm)(t,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestdeviceconfigure"},{default:(0,s.w5)((()=>[(0,s.Uk)("MQTT message")])),_:1}),(0,s.Uk)(" right after pairing. In case of problems it's recommended to remove device and than retry pairing and re-configuring device.")]),p,(0,s._)("p",null,[(0,s.Uk)("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file "),(0,s.Wm)(t,{to:"/guide/configuration/"},{default:(0,s.w5)((()=>[(0,s.Uk)("data/configuration.yaml")])),_:1}),(0,s.Uk)(" must contain the following:")]),h,(0,s.kq)(" Notes END: Do not edit below this line "),m])}]])}}]);