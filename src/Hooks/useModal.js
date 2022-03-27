import React, { useState } from "react";

function useModal() {
  const [activities, setActivities] = useState({
    loading: false,
    showModal: false,
    error: false,
  });

  const { loading, showModal, error } = activities;

  const loadingHandler = () => {
    setActivities((prev) => {
      return { ...prev, loading: !prev.loading, showModal: !prev.showModal };
    });
  };

  const successHandler = () => {
    setActivities((prev) => {
      return { ...prev, loading: !prev.loading };
    });
  };

  const modalHandler = () => {
    setActivities((prev) => {
      return { ...prev, showModal: !prev.showModal };
    });
  };

  const rejectHandler = () => {
    setActivities((prev) => {
      return { ...prev, error: !prev.error, loading: !prev.loading };
    });
  };

  const errorHandler = () => {
    setActivities((prev) => {
      return { ...prev, error: !prev.error };
    });
  };

  return [
    loading,
    showModal,
    error,
    setActivities,
    loadingHandler,
    modalHandler,
    errorHandler,
    rejectHandler,
    successHandler,
  ];
}

export default useModal;
