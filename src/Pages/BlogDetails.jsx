import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://blogging-website-backend-chaimaalachhabs-projects.vercel.app/blog/get/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erreur de chargement du blog');
        setLoading(false);
        console.error(err);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <Loading>Chargement...</Loading>;
  if (error) return <Error>{error}</Error>;
  if (!blog) return <NotFound>Blog non trouvé</NotFound>;

  return (
    <>
      <Header />
      <DetailsContainer>
        <BackButton onClick={() => navigate(-1)}>← Retour aux articles</BackButton>

        <HeroSection>
          <HeroImage src={blog.image} alt={blog.title} />
          <HeroContent>
            <Title>{blog.title}</Title>
            <AuthorInfo>
              {blog.author?.avatar && (
                <AuthorImage src={blog.author.avatar} alt="Auteur" />
              )}
              <div>
                <AuthorName>{blog.author?.name || 'Auteur inconnu'}</AuthorName>
                <PublishDate>
                  Publié le {new Date(blog.date).toLocaleDateString('fr-FR')}
                </PublishDate>
              </div>
            </AuthorInfo>
          </HeroContent>
        </HeroSection>

        <ContentWrapper>
          <MainContent>
            <p>Partager cet article :</p>
            <ContentText>{blog.description}</ContentText>

            {blog.tags?.length > 0 && (
              <TagsContainer>
                {blog.tags.map((tag, index) => (
                  <Tag key={index}>#{tag}</Tag>
                ))}
              </TagsContainer>
            )}
          </MainContent>

          <Sidebar>
            <SocialSharing>
              <p>Partager cet article :</p>
              <ShareButtons>
                <ShareButton aria-label="Partager sur Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </ShareButton>
                <ShareButton aria-label="Partager sur Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </ShareButton>
                <ShareButton aria-label="Partager sur LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </ShareButton>
              </ShareButtons>
            </SocialSharing>
          </Sidebar>
        </ContentWrapper>
      </DetailsContainer>
      <Footer />
    </>
  );
};

// Styles
const DetailsContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #ff6b00;
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 107, 0, 0.1);
  }
`;

const HeroSection = styled.section`
  position: relative;
  margin-bottom: 3rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
`;

const HeroImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  filter: brightness(0.9);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font - size: 2rem;
   }
        
  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
`;

const AuthorName = styled.p`
  font-weight: 600;
  margin: 0;
`;

const PublishDate = styled.small`
  opacity: 0.8;
  font-size: 0.9rem;
`;

const ContentWrapper = styled.div`
  margin-top: 3rem;

  @media (max-width: 992px) {
    grid - template - columns: 1fr;
  }
`;

const MainContent = styled.article`
  line-height: 1.8;
  font-size: 1.1rem;
`;

const ContentText = styled.p`
  margin-bottom: 2rem;
  white-space: pre-line;
  font-size: 1.1rem;
  color: #333; // Ajout de couleur visible
  line-height: 1.8;
  img {
    max - width: 100%;
    height: auto;
    margin: 1rem 0;
    border-radius: 8px;
  }

  code {
    background: #f4f4f4;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Tag = styled.span`
  background: rgba(255, 107, 0, 0.1);
  color: #ff6b00;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const Sidebar = styled.aside`
  @media (max-width: 992px) {
    border - top: 1px solid #eee;
  }
`;

const SocialSharing = styled.div`
    display: flex;
    gap: 1rem;
  `;

const ShareButton = styled.button`
  border: 1px solid #ddd;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font - size: 1.2rem;
    color: inherit;
  }

  &:hover {
    background: #ff6b00;
    color: white;
    border-color: #ff6b00;
  }
`;

const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`;

const Error = styled.div`
  text-align: center;
  padding: 2rem;
  color: #ff0000;
  font-weight: bold;
`;

const NotFound = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export default BlogDetails;