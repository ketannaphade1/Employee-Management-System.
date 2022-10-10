//package com.yash.springboot.Confg;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled=true)
//
//class MySecurityConfig extends WebSecurityConfigurerAdapter {
//	
//	
//	@Autowired
//	private JwtAuthenticationEntryPoint unauthorizedHandler;
//	
//	@Autowired
//	private JwtAuthenticationFilter jwtAuthenticationFilter;
//	
//	
//	
////	@Bean
////	public UserDetailsService getemployeeDetailsService() {
////		
////		return new UserDetailsServiceAutoConfiguration();
////		
////		
////	}
//	
//	
//	@Bean
//	public BCryptPasswordEncoder passwordEncoder() {
//		
//		return new BCryptPasswordEncoder();
//		
//	}
//	
//	
//
//	@Bean
//	public DaoAuthenticationProvider authenticationProvider() 
//	{
//		
//		DaoAuthenticationProvider daoAuthenticationProvider=new DaoAuthenticationProvider();
//		
//	
//		daoAuthenticationProvider.setUserDetailsService(this.userDetailsService());
//		daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
//
//		
//		return daoAuthenticationProvider;
//		
//		
//	}
//	
//
//	@Override
//	public void configure(AuthenticationManagerBuilder auth) throws Exception{
//		auth.authenticationProvider(authenticationProvider());
//		
//	}
//	
//
//	@Override
//	public void configure(HttpSecurity http) throws Exception{
//		
//		
//		http
//		.csrf()
//		.disable()
//		.authorizeRequests()
//		
////		.antMatchers("/admin/**").hasRole("ADMIN")
////		.antMatchers("/employee/**").hasRole("USER")
//		.antMatchers("/generate-token/","/user/").permitAll()
//		.antMatchers(HttpMethod.OPTIONS).permitAll()
//		.anyRequest().authenticated()
//		.and()
//		.exceptionHandling().unauthorisedEntryPoint(unauthorisedHandler)
//		.and()
//		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//	
//
//		
//		http.addFilterBefore(JwtAuthenticationFilter.class);
//		
//		
//	}
//		
//		
//	
//	
//	
//}
