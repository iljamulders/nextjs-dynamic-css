'use client'

import dynamic from "next/dynamic";

const TestWithCss = dynamic(() => import('../../components/test-with-css/TestWithCss'))

const someCondition = true;

export default function DefaultLayoutApp() {
    return (
      <>
        <h1>App, css delay:</h1>
        {
          someCondition &&
          <TestWithCss />
        }
      </>
    );
  }
  