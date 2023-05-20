import { supabase } from ".../utils/init_supabase.js"

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(400).json({ error: 'Método no permitido' });
    }
  
    const { email, password } = req.body;
  
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (error) {
        return res.status(401).json({ error: error.message });
      }
  
      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error del servidor' });
    }
  }