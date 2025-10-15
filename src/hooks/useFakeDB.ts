import { useState, useEffect } from 'react';
import initialUsers from "@/db/initialUsers.json";
import type { LoginFormData, SignupFormData } from '@/schema/authschemas';

// Tipo de Usuário (ajuste se necessário, mas deve ser compatível com SignupFormData)
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

const STORAGE_KEY = 'fake_user_db';

export function useFakeDB() {
  const [users, setUsers] = useState<User[]>([]);

  // Carregar dados do localStorage ou JSON inicial na montagem
  useEffect(() => {
    const savedUsers = localStorage.getItem(STORAGE_KEY);
    if (savedUsers) {
      // Se houver dados salvos, use-os
      setUsers(JSON.parse(savedUsers));
    } else {
      // Caso contrário, use os dados iniciais do JSON
      setUsers(initialUsers as User[]);
      // Salve os dados iniciais no localStorage pela primeira vez
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialUsers));
    }
  }, []);

  // Função para Adicionar um Novo Usuário
  const addUser = (userData: SignupFormData) => {
    // Cria um ID simples (em um DB real, o backend faria isso)
    const newUser: User = {
      id: Date.now().toString(), // ID único baseado no timestamp
      name: userData.username,
      email: userData.email,
      password: userData.password 
    };

    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      // Salva o novo array no localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers));
      return updatedUsers;
    });

    return newUser;
  };

  // Função para Validação de Login
  const loginUser = (credentials: LoginFormData): User | null => {
    const user = users.find(
      u => u.email === credentials.email && u.password === credentials.password
    );
    return user || null;
  };

  // Função para Checar se o E-mail já existe
  const isEmailTaken = (email: string): boolean => {
    return users.some(u => u.email === email);
  };

  return { users, addUser, loginUser, isEmailTaken };
}