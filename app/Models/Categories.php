<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Categories extends Model
{
    protected $table = 'categories';
    protected $guarded = ['id'];

    public function books()
    {
        return $this->hasMany(Books::class);
    }

    // public static function getCategories() {
    //     $records = DB::table('categories')
    //     ->join('books', 'books.kategori', '=', 'categories.deskripsi')
    //     ->select('books.id', 'books.judul', 'books.slug', 'books.gambar', 'books.harga', 'books.penulis', 'books.cetakan', 'books.isbn', 'books.ukuran', 'books.halaman', 'books.keterangan', 'books.sinopsis', 'categories.deskripsi', 'books.tag', 'books.')
    //     ->get()->toArray();
    //     return $records;
    // }

    // public function barang()
    // {
    //     return $this->belongsTo(Barang::class);
    // }

    // public static function getLastestPenjualan()
    // {
    //     $penjualan = DB::table('penjualan')
    //     ->join('barang', 'barang.id', '=', 'penjualan.barang_id')
    //     ->select('penjualan.id', 'barang.nama_barang', 'penjualan.tanggal', 'penjualan.terjual')
    //     ->get()->toArray();
    //     return $penjualan;
    // }

    use HasFactory;
}
