FROM python:3.6.1-alpine
MAINTAINER Sergey Khruschak <sergey.khruschak@gmail.com>
LABEL version="0.1"

RUN pip install docker python-etcd
COPY register.py /

CMD ["python", "-u", "/register.py"]
