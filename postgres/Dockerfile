FROM postgres:11.7
COPY postgres/postgresql.conf /etc/postgresql/postgresql.conf
COPY postgres/pg_hba.conf /etc/postgresql/pg_hba.conf
# COPY postgres/updateConfig.sh      /docker-entrypoint-initdb.d/_updateConfig.sh

CMD ["-c", "config_file=/etc/postgresql/postgresql.conf"]
# CMD ["-c", "hba_file=/etc/postgresql/pg_hba.conf"]
# CMD ["-c", "max_connections=200"]
# CMD ["-c", "shared_buffers=512MB"]
# CMD ["-c", "wal_level=logical"]
# CMD ["-c", "synchronous_commit=off"]