import React, { useState, useEffect, useRef } from 'react';
import { Avatar, Button, Container, Grid, TextField, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { styled } from '@mui/system';
import axios from 'axios';
import PageContainer from '../../components/container/PageContainer';
import Swal from 'sweetalert2';
import { useAuthContext } from '../../context/authContext';
import { endpoints } from '../../constants/endpoints';

// Styled components
const StyledAvatarContainer = styled('div')({
  position: 'relative',
  width: 150,
  height: 150,
  margin: '0 auto',
  marginTop: 20,
});

const StyledAvatar = styled(Avatar)({
  width: 150,
  height: 150,
  cursor: 'pointer',
});

const EditIconButton = styled(IconButton)({
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: 'white',
});

const StyledButton = styled(Button)({
  marginTop: 20,
  marginBottom: 20,
  float: 'right',
});

const StyledGrid = styled(Grid)({
  marginTop: 20,
});

const Account = () => {
  const { accessToken, userId } = useAuthContext();
  const [isEditable, setIsEditable] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });
  const [imageSrc, setImageSrc] = useState('');
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Fetch user profile data
    const fetchProfile = async () => {
      try {
        const response = await axios.get(endpoints.PROFILE, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const data = response.data;
        setProfile({
          name: data.name || '',
          phone: data.phone || '',
          email: data.email || '',
          address: data.address || '',
          city: data.city || '',
          zip: data.zip || '',
          country: data.country || '',
        });
        if (data.profileImage) {
          setImageSrc(`data:image/jpeg;base64,${data.profileImage}`);
        } else {
          setImageSrc('/static/images/avatar/1.jpg');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, [accessToken]);

  const handleEditProfile = () => {
    setIsEditable(!isEditable);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSaveProfile = async () => {
    try {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('name', profile.name);
      formData.append('phone', profile.phone);
      formData.append('email', profile.email);
      formData.append('address', profile.address);
      formData.append('city', profile.city);
      formData.append('zip', profile.zip);
      formData.append('country', profile.country);
      if (file) {
        formData.append('file', file);
      }

      await axios.put(endpoints.PROFILE, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      Swal.fire({
        title: 'Success',
        text: 'Profile updated successfully!',
        icon: 'success',
        confirmButtonColor: '#3D96FF',
        confirmButtonText: 'OK',
      });

      setIsEditable(false);
    } catch (error) {
      console.error('Error saving profile:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to update profile. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3D96FF',
      });
    }
  };

  const handleAvatarClick = () => {
    if (isEditable) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <PageContainer title="My Account" description="Templates">
      <Container>
        <StyledAvatarContainer>
          <StyledAvatar
            alt="Avatar"
            src={imageSrc}
            onClick={handleAvatarClick}
          />
          {isEditable && (
            <>
              <EditIconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleAvatarClick}
              >
                <PhotoCamera />
              </EditIconButton>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </>
          )}
        </StyledAvatarContainer>

        <Grid container spacing={2} justifyContent="center">
          <StyledGrid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditable,
              }}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditable,
              }}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditable,
              }}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditable,
              }}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="City"
              name="city"
              value={profile.city}
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditable,
              }}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="ZIP"
              name="zip"
              value={profile.zip}
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditable,
              }}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={profile.country}
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditable,
              }}
              variant="outlined"
              margin="normal"
            />
            <StyledButton variant="contained" color="primary" onClick={handleEditProfile}>
              {isEditable ? 'Cancel' : 'Edit Profile'}
            </StyledButton>
            {isEditable && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveProfile}
                style={{ marginTop: 20 }}
              >
                Save
              </Button>
            )}
          </StyledGrid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Account;
