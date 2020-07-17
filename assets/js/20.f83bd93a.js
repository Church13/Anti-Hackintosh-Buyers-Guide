(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{374:function(e,t,o){"use strict";o.r(t);var s=o(25),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),o("p",[e._v("Storage is a section that can be quite confusing as there a lot of mixed reports regarding PCIe/NVMe based devices, many of these reports are based off old information from back when PCIe/NVMe drives were not natively supported like block size mattering or require kexts/.efi drivers. Well, High Sierra brought native support for these types of drives but certain ones still do not work and can cause instability if not removed/blocked out at an ACPI level.")]),e._v(" "),o("p",[e._v("The other big issue surrounds all Samsung NVMe drives, specifically that they're known to slow down macOS, not play well with TRIM and even create instability at times. This is due to the Pheonix controller found on Samsung drives that macOS isn't too fond of, much preferring the Phison controller found in Sabrent Rocket drives and Western Digital's in-house controllers(WD SN750). The easiest way to see this is with boot up, most systems running Samsung drives will have extra long boot times and have their drives run hotter due to the software TRIM failing(hardware TRIM still should be enabled but no partiality). Also some older Intel drives and Kingston NVMe drives also experience these issues.")]),e._v(" "),o("p",[e._v("And while not an issue anymore, do note that all of Apple's PCIe drives are 4k sector-based so for best support only choose drives with such sectors.")]),e._v(" "),o("p",[o("strong",[e._v("Note for laptop users")]),e._v(": Intel SSDs don't always play nicely with laptops and can cause issues, avoid when possible")]),e._v(" "),o("p",[o("strong",[e._v("SSD/Storage Options that are NOT supported:")])]),e._v(" "),o("ul",[o("li",[e._v("Any eMMC based storage (commonly found in netbooks, some tablets and low end computer models.)")]),e._v(" "),o("li",[e._v("Samsung PM981 and PM991(commonly found in OEM systems like laptops)\n"),o("ul",[o("li",[e._v("Even if PM981 has been fixed with "),o("a",{attrs:{href:"https://github.com/acidanthera/NVMeFix/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVMeFix"),o("OutboundLink")],1),e._v(" ver. 1.0.2 there is still plenty of kernel panics issues")])])]),e._v(" "),o("li",[e._v("Micron 2200S\n"),o("ul",[o("li",[e._v("Many users have report boot issues with this drive")])])])]),e._v(" "),o("p",[o("strong",[e._v("SSDs to avoid")])]),e._v(" "),o("p",[e._v("Samsung:")]),e._v(" "),o("ul",[o("li",[e._v("Samsung 970 Evo Plus (While not natively supported out of the box, a "),o("a",{attrs:{href:"https://www.samsung.com/semiconductor/minisite/ssd/download/tools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("firmware update from Samsung"),o("OutboundLink")],1),e._v(" will allow these drives to operate in macOS)")])]),e._v(" "),o("p",[e._v("For all NVme SSDs, its recommended to use "),o("a",{attrs:{href:"https://github.com/acidanthera/NVMeFix",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVMeFix.kext"),o("OutboundLink")],1),e._v(" to fix power and energy consumption on these drives")])])}),[],!1,null,null,null);t.default=n.exports}}]);