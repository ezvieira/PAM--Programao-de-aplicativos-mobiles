import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './src/firebase/firebase';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Home from './src/screens/Home';
import Editar from './src/screens/Editar';
import Perfil from './src/screens/Perfil';
import Sobre from './src/screens/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  const [usuario, setUsuario] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUsuario(user));
    return unsubscribe;
  }, []);

  if (usuario === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F6FB' }}>
        <ActivityIndicator size="large" color="#3157D5" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3157D5' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#F4F6FB' }
        }}
      >
        {usuario ? (
          <>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Minha Coleção' }} />
            <Stack.Screen name="Editar" component={Editar} options={({ route }) => ({ title: route.params?.mode === 'create' ? 'Novo registro' : 'Editar registro' })} />
            <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Meu perfil' }} />
            <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre o aplicativo' }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Criar conta' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
