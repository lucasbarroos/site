import React from 'react';
import { Grid, Button } from '@material-ui/core';
import moment from 'moment';
import {
  Container,
  Title,
  Post,
  PostTitle,
  PostDescription,
  PostImage,
  NewIcon,
  PostDate,
} from './styles';

const posts = [{
  title: 'Newest for the NodeJS BETA Version',
  description: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
  image: 'data:image/png;base64,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',
  date: new Date(),
}, {
  title: 'Create native apps for Android and iOS using React',
  description: 'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.',
  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAtFBMVEUgICAvLy8fHx8FpdEAq9ksLCwnJycDqNUjIyMqKiogHh0gHBogGhchDgAhDAAFpc0hEwkhFxEiAAAwJiERfp0aUGIRgKEcP0svKichEAAxIxwTd5QwJyMeLTIAq9UWaIIMkbcYXnUhBgAJmsMfKi4bSFcVbokpTFkLlLsOi68YW3AbTV4dOUMxIBYSepYmWGksO0ArQ0wxHA4tNTcoHhknUmAyFwAeLDIqR1EpGAwmDgAtOT3aldFnAAAYMklEQVR4nO1de2OiuBangKKACFrxVVFBGbC2nenM3Lm7+/2/1z0n4ZHwBru7Mr3nj90pkuTkl/MmBEG4XxIHDxGNxZZNk5YMjVv2MUpatmx4JyQm/A/bwleAX/s+0qZtW94F3QKfOL4Zvc8MXxa/UfsePjV8Aodee+sp9B6+lP9R66Zi1vi1x++21fv3adQdvhx6HTBI4esiundAnadegF6HTnoOX2ftybndSIZb9vJJ4ROHhei1Dn/T4Vs2vA/qCJ84YiHj1Ljd+J8TPg69IWcGB62k+LeBr5XxYdHDhp3x6zt8gw6z5qSNws5LY+Oeboib7oK6wMc53bgZi19z99v7iksKRdM58043vjgquFhPaVc9lb728HFAJbPmQW3YF9OoA+/3QO0nUKKmhSpdQx0W786orfpwboNzEuW/NOisXbhzR5TOuMndnIxlY51Cra7s7TeCr0ngx1m43JRbu4++16vYGTQSgEqAqsEtoBTv3sKXWqz6GXDmrUA9OfwaINL3uIUzZm3uLUGnDt/M3b2PW9pIACdbZZaS1e468WuzdPdKLewPZ9lKiHUfdc7oN3C8DV0vIsMVCsaDiKL5xzTk1Bda3Tz0fVON76AiNRoOx0XPNupoPByORrSPgr7773jLDRCZ8ghQ6wJbhgYDwJF0yY3Qf8fLTSLKOwhuo+FH4JaFEYQxBbH/GS9SqkJjqqnd9LQNiBTDlhH7nRIzC+HvRo7HMPmjv56j5Hn3P0v9fNBBqfSR7T9H/zYEnQlM0PAepK86PrxPQjfRGbskTiaUiaLb9zYc9QvBjnIHYXAUB5fTCMPs9l2P+4NgC+wGfBrWdAAuxWs6FGjx3zrtDyGQjybYQapAJI25t01yxYFOE5hGCN65CIpCrWIhcEKUqLKOuU14yzl0eqUhiPcsguKoRpPGaMRZCWB+a5WaslLLxMVN8ppxl13m/wDVau04WxspAaERlQMPo1TzMbjDGkwTk5fleljxW91wVW1H2YHvHcAK8BhdyooJc9dNm8czYDDVlvJY8Y5UWCx8B41MDGxdKie8grIPh256bSObmDHLIpQH74N7AbAssY2D/fQKxzCrYh1mwo46LukYvXl5CD++By8sFluaNMwXi7W3a8iXdsCMxnU8zvYrloUE/341pvAlAi4+LdHejiEfQ6PiHljdTS8WW+dO434cFYpeTinSn4pDvq6DMyvHyC+vu8ztBSF9x5E/iIqsXj4xKtLecsvVhoqAyOtu+lOO364DfwwVvXmWx6JQe5k25ehFVZbSnwvXoAocAPCGF0U+mArAq7sxusDpXXEbmsQCDcvLdUXeI4W02KRy9qb5XD+a8mavtJ7BaG+EVYnVZ3vn9KysVpLvJz9Wvu872D2UQ68qispKBBu0FOUbopD357W7rmhHDFvlvCcMtZryB1IWvZoYPjMnpnGR32jzRiXDgsg3rdxWE5ntKp5VyzRNXcxdnJh6VbNGlEGvJu7NeENWZgpuLs34C0ZhvQfpmkG7mqVhDXyavrft7cIyVeaasds/hvbFUMvbNaIGcsESg4iYmzJP5egV20nmZ5ELxut2sKEAlv+s7SQZSdoKVnRJNa6hQ+hg3pTuibWTKm8w5Fq3Qq9oKH4tWMdRyxU0Lf/N9BTpdRsqsqLsXSJsuvUIyE1fffjf46R2yhXjcrapScIqss6DnXDuzppaXd6g8ZaA/Xc9V+X6bR1lZTcxJ9ZeUuTDCKyduZw6TvA8M63Z0XF23dWXj90bpvtpg8qgpaZQXDQc09+QqfTdVk2ZHGQiYaplbWVFWprGxZlOLy7xGq7n7K2aDiqInU7DqlnxZpfc6pf43Oo2zbpuR6YiP1MHqxpnEMCFD6J3ijAzX52ws/Zywte45liklHkJqS2zN250m/CpJ1k+xfppjTxFUZzQ0OILFycwOvfNMNm8UFeklQ0FqUurGx9maFdZtpIutJknKeEs+VtfONMS+HSLI13L3tCxVlJQnInTLByHrnQiR09PT6sy+DLiB421/E2N+SombSkraXAy2TsgfufE3GlnZ7oubKcv9iwdL1fD4p2MWDqRGioRI1HwYSABB0ks38D3/bdS/LheLWh8zt16655IFaQvSTisZ4hUAkXZxaJULn2mDYEOQxA3+jqXpDRJKosIsJlvNk858NURjCg/IjvJyqxkuDIvg28oapPJJFpUA6LbrVW8Mt0JmJLj2ES7OtODq0mKFwsS2D6vBL5HRZKkBD0J/5CuDH4Nk8oCGs3tIHhN8Ys5FWQYRD7rzMqsZEkph2+gn73A+0XnYgCDvpmxDLfvZ15Liee1vOlU1/SrooQu/dHyyzwvgS84xORRBE+p/jJ2uiVH4gsogJ2AEoNP4ZO8NVMLrobvQV+AdCbwKSB9Gcd0+yMgI5D3lqpb5npmO9Od9etkLhR5D0GzpYmm7byahc0QPvnqTiIyrCPgp7BYd1/iPzj44qsRfMp2kgp2PXxSrFtmGB6OFu+YPmAzvfko2zPhfNyGgTOl2S8CcbD949Kaec6xOGwm8C1Tdyuun2F2aQx0y9s6Exa+RPMJfMCavNQTwW4Bn2Cu1zgVTvhuhU+FxEyRPALadOrIMUnoDGQlmDpX1yoaJAsfZCgHuLJIrN8oOVaKM88qUK4zkb84OTDwJa0RPiUE/DyjAj4utNNY+KKhqva8AB9tANWMX76HsiYrnj2dTs/L3e502l2XMGwQegRSJbxwpayI8vBZe0VSkhRPN1++f/u+2axYACzDGF1/ae6addFw1fy1E9w1baqZ5gzh+898/sTpF4HP92FYf1MI32C+mcOYq5c5jU+e5n+CRsijiUn4x5om9GLO53H4AoKtwlUt4cPa7TS3YLKFpBrLkIidYl/XM4hZnk1NJaQZkP4Krr4MiEBK21GublUA3zGFD/I/Gw2Bcnh7SeAzR36gENEOmTqiNfK9+KKGcWho2x6ImG2HW8QvZRfh20JcL8lfVwXwbb49elH3XxDfpy10ASzZ8L+rCgzb9kVXr6Ed7mOvLqg7GG1BZmHp+wBbe9tToyzfOoXglzx/58vBTLWmjo3uViRqJE488L6qOXXezjaWsnwjk1UUS1+kvJoQysQTYxEnTneNvUzdM14N9DgcO6YXvaUl6OfoLoiGDpus7VO2xhL+673k4dvY0ZDY0yO03AQ0oMKgFBilnleYwN9SLL1DC3ii9tq4SDEfyqVBnjpZQLeHZ9eylrJ8NbbOdKQKomledwagD7OQF+bFcSx9re9BkLwdX7gvsH2w1DRK0E7AiiJLIAzAjTcgSJk+/gEXJeKaQsqiu2WvgleI4cNJE/g4z6tsTeMV1Xeehe8l5Drynx42nszDB6pviT+20PxLLL0uQEw4MZA7MGG09b62TLI+wo0LUpZyPdlXHWdvgtBtp44zRfQBDG8WOo8meerhAydXDr8cfCaKBakvkAKs/Pht8zL/GQCOwZ8Cya1hKvuTYRjCHlm8YlvriFxvd3D1ivOXLHV3vFwg8T5cjkeajrFxH8AnmgjJ1wEP32qPQnl52Gw2Xx+xo83D6u14AUupQH9HWNUIvsFX1lzuwDZedEwP4Kp00Q3j5CtRbF5FuMgHiyo5SLD3CMmZKBihAw5k6vgmWAVZ9h3nTAAS11fofcTaVBr3mXHFwHQXybAmLvDCRRe3erfh3xj7mPAPZUfMsmogs3hRHaEgnokh1GbQI0xQ1fV3dB0vq1UkI7z0IeuwJC88fBs0lxvSYPCOrH0bPKyeMJiST7TQEGcdLxAgxNr7hN4OAgvkQwlMvE2FqZLYvBI+sG0HV035kpwL2J0LQQ/wA2e/3irK1HNjuEEfbTaARviUbVwx8G0PJiLvsbwAaSDaqCjwewf58/6ElYG8xI5simhETsZCP3o046uo6QaEFhsubI7FL4ZPMHBJ9nMOvu9gw2KPsPqvTPVzyMZ9VPrgV/Bw8k+6MmQgky64JESqZJ1RJCvdhwam7ZRo3hr4CQCoSTiN4PMtsiJMzAzirbABIEnamJIB/BGcickgAQx4BpofrX7iXHTBhMzuEqvETKLwuSgzbtIlTELRRPEhA98DL31gTFB9vw8Y+AbfgkPw3/hIg68RfEIOvh/YRkm097tMFAbtAUhmzAcEsMqh0vrpF9mbpX8tZaJLRhDBN0WTZzwqSlqDYksLCXxcycDzNQIPBr3hDDTmxwrpP4RtUVhPJuRnVbNmMCuEDwwEBSReIsj+8MF+Fj4qfgl8goXtDy+s9A3A6BH0BqsnorwA31jMwfdEXDRw+xLrruQSYWINkXGkKl1ORPoSMGDZQZVBCjnp06fUQEVTg+xbz0ofUzIAR6RIxB0gnyEY/piwADsn6RH4IMM8nY/ESQJ8ZHaLjJUWBzn4qPil8AkusahP2bD5ab5Zff1JEgGET8hJHwkkiT4Q7d3AQmOHRF9ShtHhUM9WShOmqCxakFugEFuJ7YPGpu8oqWZpKtg+VqAzJQN3BxYZLVeUmnJqLQUbrL0Zp+NjIGGYrlD4SKS4zPA5esjDR1IPBj5VxQCNj/tWL9/2IcbNpHuAD2S2EL6HDfzLnke6+02LTB/Pcm5VeYKOZdulnFtHZwphCiBlHFLPKzjOVok9uHUCy3/KeV5m6prhUc+rnmSJZ4bGqT+uBzI1nOA2gg+XOfMgFKspOfhI4sLARwON8IWBb/PmyXHdliqvUCJ9D/Mt9b0rWL1gA3qRtePYS0mlJCaIExXvSkqxbuC8/pLR2YjmKz4fPxpo+ZzpLKQSp7sX6PDMdZiL+0jOhkqvolbbHMEMn95QvZXDdr+4GjOlFD7hIYEv85yXhY/G6G9PaeCC4Teka9v9z7/ev6Hr0ErhG+DvEFOi7oK3FgUL8eQ5ts+VygsMYL6yPU10bec4S7QmFmYd+hJsKCk8O5cJiKimWe5zgA+A+eXIwUf8QLiO+JyZhH7MKT0MvlN7Z5gWOOUocEHEZYZPDVqMEvgG7LPcUQY+EjFKqxi+1RuK/NvLZr5aDQYYuJzL4XuIy7HABema2D5zbbLEoVe0y8BcgrjL9nnmOx6EgArGanCnRhq6wTRwxTUEQMKe3KZlbEE+aUP+MOsgnjd6voQl5zmWXZ4wlH6Lnzu4FD79WWZqNODPIJ3/msAHWsWJHwcfyVcU+z2Cb4OW968o7iPwLSvgQ62VNk+QbYcb7Jp63nQu+mTC1YiL97hoxhFSPFkCWzebzI4yZJy03CWq5tFxrq4xQRUBCq+5nVZ5+AA2CX0HqqRkxE76YROG4XGF85PeB3RnJAmsMXDRMABJ4z6wJ/IqgS+7q4eHj5YXv0Qx3By9fVwIQFGshG+g41q+h4pM0kIIMthSG7QClhldQy0ogA9malwOpKYnHR6P4DihIyq41+n04IceyZ8lSEnzhiAPH6ZlCB9mt0kqIWhfAJMvq00AgeFLVN+d+BG7BkIQ59Kii0XuTQzfht+E95CRPnBRWDmVKHxPbADzHiosfPRZh/hHCt9wYuMAcfI2FFFMpHUsIWBXmbCZ7uQqhA8GMITtdEoLzJIk05qPIjsYypCyvXJ0zSIrWgAf+i+cHcqFsqRZo+Zi0vZCtethhVtzVeMcxX1kepJHN2GqM3Qkb3E8Fv6paSonfhn4BPNIn30Q6UMo36nsvZPiCSN9uqYBL5sUPhGthgTuMEKcaC8EcjS/n2CinDpeaoBL4MOgxwmFhW/Th2VRqX46lbxwe1zOAtlv9qwjqhRgcEOKK8oeQuQ1CQfl44oEC0rw18tm83LakshmO7MipL3lbG0a+jYp5G1QGBbX61Vlt1Vk4RNmgRLDt8HKjv0EqcfLN1JqlBcznaYTig0djcRxCt+QaDKWtqLC1UgwsK4aLN21OcGcIykZiLV7myHW25u6Be1mMJcl0sJxXmfGxLQ0cyvbFU/a+HKpH5dLiVyAAtg2qr9sv9A8FAuiIVoExQNVlkKSWJMUwbPtA4mlvxJe0c/gQoIGsZubs/BpO7oOkMiuLmTEIMT0RwkRnAOwQkN46GmpPSTwYRBEAmUprroORNXyFMKeHUpyXE1j354thW8ydeLnvAKsgKvrkIR4E4o++LeKx+TZYr0cZybrhUIDUVL5NRCDp6NMk2QsNQ9Rz2VMrLVRIMe3ytKVSsPgL1LoxMee3I74DHyCuUd0tqYojP54jIJ16N6ekTXBAoVJS9DyEqI8+JXAh0EIURDZT4r2YPRDhg8SpHG79svQU0fpDkgsHdgzN5w68S4NNBLF8Flbz/M4+NQTXPGupC9L2EbPPMMltsf45cuBWobgCJkp/kqgUI236LrnJ1t4Vl8fA+gLBZ/dVAaXeFNiHOJLonHxogHPBnANFClCiFwtUb/h1qf42ZOBl7/GazNEPp5TPvTcKw9l8GF8nJQCQOtkHxKPRcwkbiDKbrmP8TOMjENW4Uoc4Kimu3teLJbmmqoB8LLarL68vX0ZYFFzMP/5do0ESTf05WJxPhkWI2o/sC9T4PdB/mEYGUO8NpJLujE6kwGxeCwsFruoFoy3kCebG7pxJmo5MYw/ko4JpPrEIny4mD5k3xcphW/pOKlCuFtQG2dvpL+WwldLqq7rWtyW2uBVUkGGf6bHzYga3Im4p+x2eaNS1ZIBYWwmUC3boZ/tGPnAQmXBO6llYxL4ki7FWYAenPm1O3w8Fb6Hz5/1IRa+Zdb1CBeWinEofqUy+zJgNXwqZLxCvFLq7BX3921n8QUMnLrvLuWp8FV89sSjBm+Td9pPVvo6ev6F3rLXyUu3EolW/DwI7IQWQshiQ5IWv05k+fINm3OzQxUfBJG+jZ9e46TsA88yyLz3zEuXWHa0UdWLZEbg0GhAcxdY6nPR/nlnI6ocyNviuK8TlZ0FQRFscpJGly/QMgPx0stpb/l5ZJVjWntnKpqW5S5B9KbPWOrD6p69MyzdeJZz1eCbqPzoKkCw9ByXzkcwkSErjjFhtLf0LLeaBVN1iJL3Fz9wHCccEW9vnQ6Q5x/2b74S7wb4MCp6hTRH2Ta3eI8q1a99t6bBSWD60oneXzsnT37dNy+KIYVspepmqgcwt5n3hrNIKpvWnZja6Bg1ffcaBKF/NZiKqG6cXwMv8PUPR0+oB3A8yh5M0Pm9+FLBpWeo3Q6egCmCYUysjI3TzQlc/DvQE6psYDxV5vA+gTdgnd9yiMdudILfnZ+AWByd5uYwjM8oZaWixTs2nOpS4Joc+NmDE0xLTzzKgYhn9eeOgWw0BPfdnXHD08j7cXipILQ5+5WbX92pufGpLg1eHMxRDwSPoe4nXpMTmsfDHI1vOLq5X9gRuo8zw3t46HVCYqNg+m+m/38x4Sb6Pb7X8fCPAjlm7EaP4WO/FiPUpQMfhRyJKX/DbxU1Pdq7I8UpDRn6t/1SVpQkfMhnsihsGOcwn3mio6Q/9xe+cgsUBcCYbHX+DgeFjcmhmw3dH0qmUBo+iLnc96E4PM5GzePKgyX//43KAmLhqxu7/76jhftr8vVd7oihWkyYpevC+x1Qq+/z1n43hjtbrYE7ZdS8A+93QO3MNwNOIdoseq3OvOur6203A64MVelKm50u13/X20p/qj/eXv/x7fLuOvH+71NL683JV/YbHE0+vl3Wogvvd0BtYwcu+uO3GbU0fEijlqPfG3VYfxa/Zj+UU98jl/afGOafbzPXO30Nr8wQ9IQ6+D7OQSRKWmUUK/pKmvQz8Etn3Tzy4pCKz0csxLS+q08IH+8+yLzLNPpvGf6OKEWilfFhwYKG/DnYLZxoKrSfCT4ermEGvTYdfUr4MsqaAbNNPz2Hr2vkUHr2dTsY+g5f57C/7Olwyx2UnxW+EvzadvJp4Sv6Blf7NfjE8BUckt0Wg08NX3YPX/u8te/wCbfAJwo3otd7+DrGfRFlrF/7r+l+0qSN0gfYvqRpT0sGN8CXQ699J72Hr6v2lHwtqy1+N9mOf5+6wlf6rbF2UvT5ivW0WfmbSa2Woe+bXLo9KswUDHgHPGj+Zkv/t1h1WP/sq+njrCw2dsD932XQfoNs1uyNxZwuN/YD3VT+nqjtDAqhykHabOz+b25u+WGe3JkS8byznriJAjOmr5+eI7exvvndOZQyvzSQp8xxGr2k/IkqpZQ/zoR1stn6ac3HqNsNfbfUXARyojeo+b3ue9RtPtR7r8RMojJjyOcZDY53qBRApsO+mj6B+9Z1+U0FR3MVQCPmyggVMTSzbv3VXaHJBy0LwCvBJf8AaVwCICvN/dVdofSMuPSGPHgVr9Dks+ESAJk7eoyewH/MN/9r0fvmFTat6LSxQYFtYwethO9/qCOuKl6tPggAAAAASUVORK5CYII=',
  date: new Date(),
}];

export default function RecentPosts() {
  return (
    <Container id="recent_posts" name="recent_posts">
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Title>Recent Posts</Title>
        </Grid>
        {
          posts.map((el) => (
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Post>
                <NewIcon>New</NewIcon>
                <PostImage src={el.image} />
                <PostTitle>{el.title}</PostTitle>
                <PostDescription>
                  {el.description}
                </PostDescription>
                <PostDate>{moment(el.date).format('DD MMM')}</PostDate>
                <Button variant="contained" color="secondary" style={{ marginBottom: 10 }}>
                  Read more
                </Button>
              </Post>
            </Grid>
          ))
        }
        <Grid item lg={12} md={12} sm={12} xs={12} style={{ textAlign: 'center' }}>
          <Button variant="outlined" color="secondary">Blog Page</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
