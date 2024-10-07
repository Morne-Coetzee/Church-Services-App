package church.services.backend

import javax.servlet.*
import javax.servlet.http.HttpServletResponse

class CorsFilter implements Filter {

    @Override
    void init(FilterConfig filterConfig) throws ServletException {}

    @Override
    void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse httpServletResponse = (HttpServletResponse) response
        httpServletResponse.setHeader("Access-Control-Allow-Origin", "*")
        httpServletResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        httpServletResponse.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
        httpServletResponse.setHeader("Access-Control-Allow-Credentials", "true")
        chain.doFilter(request, response)
    }

    @Override
    void destroy() {}
}
