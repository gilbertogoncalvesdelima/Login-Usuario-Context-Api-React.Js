// Importação de estilos e ícones necessários
import {
    AboutMeLabel,
    Container,
    Content,
    LeftContent,
    RightContent,
    SkillContainer,
    TabContainer,
    TabContent,
    TabContentGrid,
    TabItem,
    TopHeader
  } from "./styles";
  import {
    FaFacebookF,
    FaPen,
    FaPodcast,
    FaStar,
    FaTrophy,
    FaTv
  } from "react-icons/fa";
  import { GrInstagram } from "react-icons/gr";
  import { FaGlobeAmericas } from "react-icons/fa";
  import UserInfoCard from "../../components/userInfoCard";
  import PopularityItem from "../../components/popularityItem";
  import { BiSolidCameraMovie } from "react-icons/bi";
  import SkillItem from "../../components/skillItem";
  import { useEffect, useState } from "react";
  import SocialMediaPost from "../../components/post";
  import api from "../../services/api";
  import Skeleton from "react-loading-skeleton";
  import UserCard from "../../components/userCard";
  import useAuthContext from "../../hooks/useAuthContext";
  
  const HomeScreen = () => {
    // Estado para controlar a aba atual
    const [currentTab, setCurrentTab] = useState<"inicio" | "usuarios">("inicio");
  
    // Contexto de autenticação
    const { userAuthenticated } = useAuthContext();
  
    // Estados e funções para buscar e armazenar posts e usuários
    const [isFetchingPost, setIsFetchingPost] = useState(true);
    const [posts, setPosts] = useState<any[]>([]);
  
    const [isFetchingUsers, setIsFetchingUsers] = useState(true);
    const [users, setUsers] = useState<any[]>([]);
  
    // Função para buscar usuários
    const fetchUsers = async () => {
      setIsFetchingUsers(true);
      const result = await api.get("/users");
      if (result.data) {
        setUsers(result.data.users);
      }
      setIsFetchingUsers(false);
    };
  
    // Função para buscar posts
    const fetchPost = async () => {
      setIsFetchingPost(true);
      const result = await api.get("/posts");
      if (result.data) {
        setPosts(result.data.posts);
      }
      setIsFetchingPost(false);
    };
  
    // Efeito para buscar posts e usuários ao montar o componente
    useEffect(() => {
      fetchPost();
      fetchUsers();
    }, []);
  
    // Componente para renderizar a página "Inicio"
    const StartPage = () => {
      return (
        <>
          {isFetchingPost ? (
            // Exibe um esqueleto de carregamento enquanto os posts estão sendo buscados
            <Skeleton
              containerClassName="skeleton"
              style={{
                width: "100%",
                height: 100,
                marginTop: 10,
              }}
              count={5}
            />
          ) : (
            // Mapeia e renderiza os posts se existirem
            posts &&
            posts.length > 0 &&
            posts.map((item: any, index) => {
              const userData = users.find((finder) => finder.id === item.userId);
              // Renderiza somente se o usuário existir
              if (userData) {
                return (
                  <SocialMediaPost
                    key={index}
                    picture={
                      userData?.image
                        ? userData.image
                        : "https://bootdey.com/img/Content/avatar/avatar7.png"
                    }
                    username={
                      userData?.firstName
                        ? userData.firstName + " " + userData.lastName
                        : "Carregando..."
                    }
                    content={item.body}
                  />
                );
              }
            })
          )}
        </>
      );
    };
  
    // Componente para renderizar a página "Usuários"
    const UsersPage = () => {
      return (
        <TabContentGrid>
          {isFetchingUsers ? (
            // Exibe um esqueleto de carregamento enquanto os usuários estão sendo buscados
            <Skeleton
              containerClassName="skeleton"
              style={{
                width: "100%",
                height: 100,
                marginTop: 10,
              }}
              count={5}
            />
          ) : (
            // Mapeia e renderiza os usuários se existirem
            users &&
            users.length > 0 &&
            users.map((item: any, index) => {
              return (
                <UserCard
                  key={index}
                  image={item.image}
                  name={item.firstName + " " + item.lastName}
                  bio={`Oii, eu tenho ${item.age} anos e sou de ${item.address.city} - ${item.address.state}`}
                />
              );
            })
          )}
        </TabContentGrid>
      );
    };
  
    return (
      <Container>
        {/* TOPO */}
        <TopHeader>
          <div className="profile-pic-container">
            <img src={userAuthenticated?.image} alt="Foto de perfil do usuário" />
          </div>
  
          <div className="userinfo-container">
            <p id="name">{`${userAuthenticated?.firstName} ${userAuthenticated?.lastName}`}</p>
            <p id="biography">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero veritatis et itaque, modi recusandae dicta exercitationem aspernatur id minima, minus, doloribus quibusdam repellat! Molestias fugit maxime autem eaque praesentium!
            </p>
            <div className="contact-container">
              {/* Ícone do Facebook em azul */}
              <div className="contact-item" style={{ background: "#3279B5" }}>
                <FaFacebookF color="white" />
              </div>
              {/* Ícone do Instagram com gradiente */}
              <div
                className="contact-item"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)",
                }}
              >
                <GrInstagram color="white" />
              </div>
              {/* Ícone de um globo com fundo preto */}
              <div className="contact-item" style={{ background: "black" }}>
                <FaGlobeAmericas color="white" />
              </div>
            </div>
          </div>
        </TopHeader>
  
        {/* Conteúdo */}
        <Content>
          <LeftContent>
            {/* Informações do usuário */}
            <UserInfoCard style={{ marginBottom: 15 }} title="Popularidade do usuário" icon={<FaStar color="#FFD700" />}>
              <PopularityItem
                icon={<FaPodcast color="darkgray" />}
                title="Publicações"
                value={153}
              />
  
              <PopularityItem
                icon={<FaTv color="darkgray" />}
                title="Séries assistidas"
                value={10}
              />
  
              <PopularityItem
                icon={<BiSolidCameraMovie color="darkgray" />}
                title="Filmes assistidos"
                value={405}
              />
            </UserInfoCard>
            {/* Habilidades do usuário */}
            <UserInfoCard style={{ marginBottom: 15 }} title="Skills" icon={<FaTrophy color="#ff8800" />}>
              <SkillContainer>
                <SkillItem color="#fcb603" title="JavaScript" />
                <SkillItem color="#a1b1f7" title="React" />
                <SkillItem color="#9dfc03" title="React-Native" />
                <SkillItem color="#fc3d03" title="NodeJS" />
              </SkillContainer>
            </UserInfoCard>
            {/* Informações pessoais do usuário */}
            <UserInfoCard style={{ marginBottom: 15 }} title="Sobre mim" icon={<FaPen color="black" />}>
              <AboutMeLabel>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur modi suscipit autem? Deleniti autem voluptate cumque, sequi pariatur porro recusandae, ipsam iure illo, dignissimos omnis. Minus, assumenda pariatur. Eos?
              </AboutMeLabel>
            </UserInfoCard>
          </LeftContent>
          
          {/* Conteúdo à direita */}
          <RightContent>
            {/* Navegação por abas */}
            <TabContainer>
              <div className="top-tab-container">
                {/* Abas "Inicio" e "Usuários" */}
                <TabItem $active={currentTab === "inicio"} onClick={() => setCurrentTab("inicio")}>Inicio</TabItem>
                <TabItem $active={currentTab === "usuarios"} onClick={() => setCurrentTab("usuarios")}>Usuários</TabItem>
              </div>
              {/* Conteúdo da aba selecionada */}
              <TabContent>
                {currentTab === "inicio" && <StartPage />}
                {currentTab === "usuarios" && <UsersPage />}
              </TabContent>
            </TabContainer>
          </RightContent>
        </Content>
      </Container>
    );
  }
  
  export default HomeScreen;
  