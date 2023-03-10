import { Layout } from 'layout';
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import nextI18NextConfig from '../next-i18next.config.js';
import '../styles/globals.css';
import { Spinner } from '@/components';

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [est, setEst] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function estModalOpen() {
    setEst(true);
  }

  function estModalClose() {
    setTimeout(() => {
      setEst(false);
    }, 500);
  }

  return (
    <Hydrated>
      <Layout
        data={pageProps}
        modal={{
          isOpen: isOpen,
          closeModal: closeModal,
          openModal: openModal,
          estModalStatus: est,
          estModalClose: estModalClose,
        }}
      >
        <Component
          modal={{
            isOpen: isOpen,
            closeModal: closeModal,
            openModal: openModal,
            estModalOpen: estModalOpen,
          }}
          {...pageProps}
        />
      </Layout>
    </Hydrated>
  );
}

const Hydrated = ({ children }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true);
    }
  }, []);

  return hydration ? children : <Spinner />;
};

export default appWithTranslation(MyApp, nextI18NextConfig);
