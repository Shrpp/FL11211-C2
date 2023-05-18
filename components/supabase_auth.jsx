import supabase from "../utils/init_supabase.js";
import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function OAuth() {
  const [session, setSession] = useState({})

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<div>Logged In!</div>)
  }
};

export function OAuthUtils() {
  const [showAuth, setShowAuth] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLoginClick = () => {
    setShowAuth(true);
  };

  const handleLogoutClick = async () => {
    await supabase.auth.signOut();
    setLoggedIn(false);
  };

  return {
    showAuth,
    loggedIn,
    handleLoginClick,
    handleLogoutClick,
  };
}

