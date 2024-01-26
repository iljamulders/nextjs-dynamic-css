import dynamic from "next/dynamic";

const TestWithCss = dynamic(() => import('../test-with-css/TestWithCss'))

const someCondition = true;

export default function DefaultLayoutPages() {
    return (
      <>
      <h1>Pages, no css delay:</h1>
        {
          someCondition &&
          <TestWithCss />
        }
      </>
    );
  }
  