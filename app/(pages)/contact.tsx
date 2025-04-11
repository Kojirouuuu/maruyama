// app/(tabs)/contact.tsx

import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    // バリデーションチェックも追加可
    Alert.alert('お問い合わせ送信完了', `${name} 様、ありがとうございます！`);
    // TODO: API 経由でサーバーへ送信
  };

  return (
    <ScrollView className="p-4 bg-white h-full">
      <Text className="text-xl font-bold mb-4 text-black">
        ご予約・お問い合わせ
      </Text>

      <TextInput
        placeholder="お名前"
        value={name}
        onChangeText={setName}
        className="border p-2 mb-2"
      />
      <TextInput
        placeholder="メールアドレス"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="border p-2 mb-2"
      />
      <TextInput
        placeholder="電話番号"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        className="border p-2 mb-2"
      />
      <TextInput
        placeholder="予約希望日（例: 2025-04-15）"
        value={date}
        onChangeText={setDate}
        className="border p-2 mb-2"
      />
      <TextInput
        placeholder="時間（例: 18:30）"
        value={time}
        onChangeText={setTime}
        className="border p-2 mb-2"
      />
      <TextInput
        placeholder="ご質問・ご要望など"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
        className="border p-2 mb-4"
      />

      <Button title="送信する" onPress={handleSubmit} />
      <Link href="/(pages)/hello" asChild>
        <Button title="Helloページへ" />
      </Link>
    </ScrollView>
  );
}
