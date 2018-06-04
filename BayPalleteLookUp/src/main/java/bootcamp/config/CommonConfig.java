package bootcamp.config;

import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;


@Configuration
public class CommonConfig {
	
	
	@Qualifier("dataSource")
	@Autowired
	DataSource dataSource;
	
	@Bean
	public JdbcTemplate getJdbcTemplate() {
		return new JdbcTemplate(dataSource);
	}
	
//	@Autowired
//    Environment env;

//    @Bean
//    public DataSource createDataSource() {
//        BasicDataSource ds = new BasicDataSource();
//        ds.setDriverClassName(env.getProperty("spring.datasource.driver-class-name"));
//        ds.setUsername(env.getProperty("spring.datasource.username"));
//        ds.setPassword(env.getProperty("spring.datasource.password"));
//        ds.setUrl(env.getProperty("spring.datasource.url"));
//        return ds;
//    }

}
