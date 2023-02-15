import { Footer } from '../../components/Footer';
import { FooterBottom } from '../../components/FototerBottom';
import { Header } from '../../components/Header';
import { Container } from './styles';
import IUser, { IUpdateUser, UserProfile } from '../../interfaces/IUser';
import { useEffect, useState } from 'react';
import requests from '../../services/requests';
import formatDate from '../../utils/formatDate';

export function Profile() {
  const [isFetching, setFetching] = useState(false);
  const [formData, setFormData] = useState<IUpdateUser>({
    user: {},
    profile: {},
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userProperties = ['username', 'email', 'birthdate'];
    if (userProperties.some((property) => property === e.target.name)) {
      setFormData({
        ...formData,
        user: {
          ...formData.user,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setFormData({
        ...formData,
        profile: {
          ...formData.profile,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const getUserData = async () => {
    try {
      setFetching(true);
      const userData = await requests.get.auth.userInformations();

      const toSkipCountryCode = 2;

      setFormData({
        user: {
          birthdate: formatDate(userData.birthdate),
          email: userData.email,
          username: userData.username,
        },
        profile: {
          phoneNumber: userData.profile.phoneNumber
            ? userData.profile.phoneNumber.slice(toSkipCountryCode)
            : '',
          name: userData.profile.fullName ?? '',
          cpf: userData.profile.cpf ?? '',
        },
      });

      setFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  const formatProfileInformations = (data: UserProfile) => {
    let profile: UserProfile = {};

    if (data.cpf) {
      profile = { ...profile, cpf: data.cpf?.replace(/\D/g, '') };
    }

    if (data.phoneNumber) {
      profile = {
        ...profile,
        phoneNumber: `55${formData.profile.phoneNumber?.replace(/\D/g, '')}`,
      };
    }

    if (data.name) profile = { ...profile, name: formData.profile.name };

    return profile;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const profileData = formatProfileInformations(formData.profile);

    try {
      await requests.put.users.editUser(formData);

      await requests.put.users.editProfile({
        ...formData,
        profile: profileData,
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
                placeholder='Nome de usuário'
                value={formData.user.username}
                onChange={handleChange}
              />
              <input
                name='email'
                type='email'
                placeholder='E-mail'
                value={formData.user.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                name='name'
                type='text'
                value={formData.profile.name}
                placeholder='Nome'
                onChange={handleChange}
              />
              <input
                name='cpf'
                type='text'
                value={formData.profile.cpf}
                placeholder='CPF'
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                name='birthdate'
                type='text'
                value={formData.user.birthdate}
                onChange={handleChange}
              />
              <input
                name='phoneNumber'
                type='text'
                maxLength={15}
                value={phoneMask(formData.profile.phoneNumber)}
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
