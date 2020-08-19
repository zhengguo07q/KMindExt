import React, { useState } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';
import Head from './components/Head';
import Footer from './components/Footer';
import DocAttrAction from './components/DocAttrAction';
import DocAction from './components/DocAction';


//第一次载入时，去掉所有的事件监听，并加入调整大小监听
(function() {
  const throttle = function(type: string, name: string, obj: Window = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  if (typeof window !== 'undefined') {
    throttle('resize', 'optimizedResize');
  }
})();


interface IGetDevice {
  (width: number): 'phone' | 'tablet' | 'desktop';
}
export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //定义一个获得的设备宽度
  const getDevice: IGetDevice = width => {
    const isPhone =
      typeof navigator !== 'undefined' &&
      navigator &&
      navigator.userAgent.match(/phone/gi);

    if (width < 680 || isPhone) {
      return 'phone';
    } else if (width < 1280 && width > 680) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  //调整设备页面大小时，设置设备的大小
  const [device, setDevice] = useState(getDevice(NaN));

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', e => {
      const deviceWidth =
        (e && e.target && (e.target as Window).innerWidth) || NaN;
      setDevice(getDevice(deviceWidth));
    });
  }

  return (
    //提供国际化支持
    <ConfigProvider device={device}>
      <Shell
        type="brand" // 样式定义，主题色，深，浅，主题色主题
        style={{
          minHeight: '100vh',
        }}
      >
        <Shell.Branding>
          <Head/>
          
          
        </Shell.Branding>

          

        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        >
          <DocAction></DocAction>
        </Shell.Navigation>

        <Shell.Action>
        <DocAttrAction></DocAttrAction>
        </Shell.Action>


        <Shell.Navigation>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>
  );
}
