import{w as t,y as e,a as l,_ as o,t as i,i as n,x as a}from"./styles-sT2V1cOw.js";const s=t`
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 510.322 510.322"
    xml:space="preserve"
    style="width: 28px; vertical-align: middle;"
  >
    <g>
      <path
        style="fill:currentColor;"
        d="M429.064,159.505c0-0.151,0.086-1.057,0.086-1.057c0-75.282-61.261-136.521-136.543-136.521    c-52.244,0-97.867,30.587-120.753,76.339c-11.67-9.081-25.108-15.682-40.273-15.682c-37.166,0-67.387,30.199-67.387,67.387    c0,0,0.453,3.279,0.798,5.824C27.05,168.716,0,203.423,0,244.516c0,25.389,9.901,49.268,27.848,67.171    c17.968,17.99,41.804,27.869,67.193,27.869h130.244v46.83h-54.66l97.694,102.008l95.602-102.008h-54.66v-46.83H419.25    c50.174,0,91.072-40.855,91.072-90.986C510.3,201.827,474.428,164.639,429.064,159.505z M419.207,312.744H309.26v-55.545h-83.975    v55.545H95.019c-18.184,0-35.333-7.075-48.211-19.996c-12.878-12.878-19.953-30.005-19.953-48.189    c0-32.68,23.21-60.808,55.264-66.956l12.511-2.394l-2.092-14.431l-1.488-10.785c0-22.347,18.184-40.51,40.531-40.51    c13.266,0,25.691,6.514,33.305,17.408l15.229,21.873l8.52-25.303c15.013-44.652,56.796-74.656,103.906-74.656    c60.506,0,109.709,49.203,109.709,109.644l-1.337,25.712l15.121,0.302l3.149-0.086c35.419,0,64.216,28.797,64.216,64.216    C483.401,283.969,454.604,312.744,419.207,312.744z"
      />
    </g>
  </svg>
`;let d=class extends n{render(){const t=(()=>{var t,e;const l=window.navigator.userAgent,o=(null===(e=null===(t=window.navigator)||void 0===t?void 0:t.userAgentData)||void 0===e?void 0:e.platform)||window.navigator.platform;return-1!==["macOS","Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(o)?"Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(o)?"iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(o)?"Windows":/Android/.test(l)?"Android":/Linux/.test(o)?"Linux":null})();return a`
      <ew-dialog open @closed=${this._handleClose}>
        <div slot="headline">未选择端口</div>
        <div slot="content">
          <div>
            如果您因为没有在列表中看到您的设备而未选择端口，请尝试以下步骤：
          </div>
          <ol>
            <li>
              确保设备已连接到此计算机（即运行显示此网站的浏览器的计算机）
            </li>
            <li>
              大多数设备在通电时会有一盏小灯。如果您的设备有，请确保它已亮起。
            </li>
            <li>
              确保您使用的 USB 线缆可以传输数据，而不是仅供电的线缆。
            </li>
            ${"Linux"===t?a`
                  <li>
                    如果您使用的是 Linux 系统，请确保您的用户属于 <code>dialout</code> 组，以便有权限访问设备。
                    <code class="block"
                      >sudo usermod -a -G dialout YourUserName</code
                    >
                    您可能需要注销并重新登录或重启才能激活新的组访问权限。
                  </li>
                `:""}
            <li>
              确保您已安装正确的驱动程序。以下是 ESP 设备中常用芯片的驱动程序：
              <ul>
                <li>
                  CP2102 驱动程序：
                  <a
                    href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"
                    target="_blank"
                    rel="noopener"
                    >Windows 和 Mac</a
                  >
                </li>
                <li>
                  CH342、CH343、CH9102 驱动程序：
                  <a
                    href="https://www.wch.cn/downloads/CH343SER_ZIP.html"
                    target="_blank"
                    rel="noopener"
                    >Windows</a
                  >,
                  <a
                    href="https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html"
                    target="_blank"
                    rel="noopener"
                    >Mac</a
                  >
                  <br />
                  （通过带 ${s} 图标的蓝色按钮下载）
                </li>
                <li>
                  CH340、CH341 驱动程序：
                  <a
                    href="https://www.wch.cn/downloads/CH341SER_ZIP.html"
                    target="_blank"
                    rel="noopener"
                    >Windows</a
                  >,
                  <a
                    href="https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html"
                    target="_blank"
                    rel="noopener"
                    >Mac</a
                  >
                  <br />
                  （通过带 ${s} 图标的蓝色按钮下载）
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div slot="actions">
          ${this.doTryAgain?a`
                <ew-text-button @click=${this.close}>取消</ew-text-button>
                <ew-text-button @click=${this.tryAgain}>
                  重试
                </ew-text-button>
              `:a`
                <ew-text-button @click=${this.close}>关闭</ew-text-button>
              `}
        </div>
      </ew-dialog>
    `}tryAgain(){var t;this.close(),null===(t=this.doTryAgain)||void 0===t||t.call(this)}close(){this.shadowRoot.querySelector("ew-dialog").close()}async _handleClose(){this.parentNode.removeChild(this)}};d.styles=[e,l`
      li + li,
      li > ul {
        margin-top: 8px;
      }
      ul,
      ol {
        margin-bottom: 0;
        padding-left: 1.5em;
      }
      li code.block {
        display: block;
        margin: 0.5em 0;
      }
    `],d=o([i("ewt-no-port-picked-dialog")],d);const c=async t=>{const e=document.createElement("ewt-no-port-picked-dialog");return e.doTryAgain=t,document.body.append(e),!0};export{c as openNoPortPickedDialog};
