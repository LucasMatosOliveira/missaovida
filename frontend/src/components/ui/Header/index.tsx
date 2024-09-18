import React from 'react';
import { SignOutButton } from '@/components/ui/SignOutButton';
import { FormRow } from '@/components/form/FormRow';
import { FormColumn } from '@/components/form/FormColumn';

interface HeaderProps {
  pageTitle?: string;
}

export function Header({ pageTitle }: HeaderProps) {

  return (
    <FormRow className='m-0'>
      <div className="header-fixed">
        <div className="header-contents">
        <FormColumn span={4}>
          <img
            src="https://revwildodosanjos.com.br/wp-content/themes/revwildo-spa/assets/images/vida.png"
            alt="Logo"
            className="logo"
          />
        </FormColumn>
        <FormColumn span={4} className='header-column'>
          <h1 className="header-text">{pageTitle}</h1>
        </FormColumn>
        <FormColumn span={4} className='header-column sign-out-button'>
          <SignOutButton />
        </FormColumn>
        </div>
      </div>
    </FormRow>
  );
}