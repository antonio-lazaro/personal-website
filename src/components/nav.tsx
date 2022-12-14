import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import InDevTag from './dev-tag'
import Logo from './icons/Logo'
import SocialLinks from './social'

const StyledNavBarContainer = styled.div`
  width: 100%;
  height: 87px;
  padding: 0 39px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: ${({ theme }) => `${theme.colors.bg}b3`}; // 70% opacity
  backdrop-filter: blur(26px);

  @media (${({ theme }) => theme.bp.desktopS}) {
    padding: 0 30px;
  }

  @media (${({ theme }) => theme.bp.desktopS}) and (orientation: landscape) {
    height: 64px;
    padding: 0 15px;
  }

  @media (${({ theme }) => theme.bp.tabletS}) {
    height: 64px;
    padding: 0 15px;
  }
`

const StyledFlexDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding-left: 10px;
  gap: 10px;

  @media (${({ theme }) => theme.bp.desktopS}) {
    padding-left: 5px;
  }

  @media (${({ theme }) => theme.bp.tabletS}) {
    padding-left: 5px;
  }
`

const StyledFillDiv = styled.div`
  flex: 1;
  height: 100%;
  padding-left: 10px;
`

const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 38px;

  @media (${({ theme }) => theme.bp.tabletS}) {
    gap: 25px;
  }
`

const StyledDownloadButton = styled.a`
  background-color: ${({ theme }) => theme.colors.btnBg};
  font-size: 14px;
  font-weight: 550;
  color: ${({ theme }) => theme.colors.btnText};
  padding: 10px 35px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  @media (${({ theme }) => theme.bp.tabletS}) {
    padding: 10px 25px;
    border-radius: 7px;
  }
`

const NavBar = () => {
  return (
    <StyledNavBarContainer>
      <StyledFlexDiv>
        <StyledLeftContainer>
          <Link to="/">
            <Logo />
          </Link>
          <InDevTag />
        </StyledLeftContainer>

        <StyledFillDiv />

        <StyledRightContainer>
          <SocialLinks />
          <StyledDownloadButton href="/cv.pdf">
            Download CV
          </StyledDownloadButton>
        </StyledRightContainer>
      </StyledFlexDiv>
    </StyledNavBarContainer>
  )
}

export default NavBar
