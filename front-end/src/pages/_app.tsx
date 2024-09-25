// ** Importações do Next.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

// ** Importações do Emotion
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/cache';

// ** Configurações
import themeConfig from 'src/configs/themeConfig';

// ** Importação de Componentes
import UserLayout from 'src/layouts/UserLayout';
import ThemeComponent from 'src/@core/theme/ThemeComponent';

// ** Contextos
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext';

// ** Utilitários
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache';

// ** Estilos globais
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../styles/globals.css';

// ** Tipos extendidos para Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage & { getLayout?: (page: React.ReactNode) => React.ReactNode };
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  // Verifica se o usuário está autenticado quando o aplicativo carrega
  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token && router.pathname !== '/login-user') {
      router.push('/login-user'); // Redireciona para a página de login se o token não for encontrado
    }
  }, [router]);

  // Verifica se a página tem um layout específico, senão usa o padrão UserLayout
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Nextjs Dashboard Template`}</title>
        <meta name="description" content={`${themeConfig.templateName} – Nextjs Dashboard Template.`} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => (
            <ThemeComponent settings={settings}>
              {getLayout(<Component {...pageProps} />)}
            </ThemeComponent>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  );
};

export default App;
