import { Footer } from '../../components/Footer';
import { FooterBottom } from '../../components/FototerBottom';
import { Header } from '../../components/Header';
import { Container } from './styles';
import IUser, { IUpdateUser } from '../../interfaces/IUser';
import { useEffect, useState } from 'react';
import requests from '../../services/requests';
import formatDate from '../../utils/formatDate';

export function Profile() {
  const [data, setData] = useState<IUser | null>(null);
  const [isFetching, setFetching] = useState(false);
  const [formData, setFormData] = useState<IUpdateUser>({
    username: '',
    email: '',
    birthdate: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getUserData = async () => {
    try {
      setFetching(true);
      const userData = await requests.get.auth.userInformations();
      setData(userData);

      setFormData({
        birthdate: formatDate(userData.birthdate),
        email: userData.email,
        phoneNumber: userData.profile.phoneNumber ?? formData.phoneNumber,
        username: userData.username,
      });

      setFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formattedPhoneNumber = `55${formData.phoneNumber?.replace(
      /\D/g,
      ''
    )}`;

    try {
      await requests.put.users.editUser({
        ...formData,
        phoneNumber: formattedPhoneNumber,
      });
      await getUserData();
    } catch (error) {
      console.error(error);
    }
  };

  const phoneMask = (value: string | undefined) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <Header />
      {!isFetching && (
        <section>
          <form onSubmit={handleSubmit}>
            <p>Informações pessoais</p>

            <div>
              <input
                name='username'
                type='text'
                value={formData.username}
                onChange={handleChange}
              />
              <input
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                name='birthdate'
                type='text'
                value={formData.birthdate}
                onChange={handleChange}
              />
              <input
                name='phoneNumber'
                type='text'
                maxLength={15}
                value={phoneMask(formData.phoneNumber)}
                onChange={handleChange}
                placeholder={'(xx) xxxxx-xxxx'}
              />
            </div>

            <button>Salvar</button>
          </form>
        </section>
      )}
      <Footer />
      <FooterBottom />
    </Container>
  );
}
