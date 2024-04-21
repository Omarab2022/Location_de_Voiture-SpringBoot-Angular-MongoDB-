package com.Mongo.LocationVoiture.Configuration;

import com.Mongo.LocationVoiture.Enums.Role;
import com.Mongo.LocationVoiture.Repository.UserRepo;
import com.Mongo.LocationVoiture.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Component
public class UserDetails implements AuthenticationProvider {

    @Autowired
    UserRepo userRepo;


    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String pwd = authentication.getCredentials().toString();
        User user = userRepo.findByEmail(username);
        if (user != null) {
            if (pwd.equals(user.getMotDePasse())) {
                return new UsernamePasswordAuthenticationToken(username, pwd, getGrantedAuthorities(user.getRoles()));
            } else {
                throw new BadCredentialsException("Invalid password!");
            }
        } else {
            throw new BadCredentialsException("No user registered with this details!");
        }
    }


    private List<GrantedAuthority> getGrantedAuthorities(Set<Role> authorities) {
        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        for (Role authority :
                authorities) {
            grantedAuthorities.add(new SimpleGrantedAuthority(authority.name()));
        }
        return grantedAuthorities;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }
}
