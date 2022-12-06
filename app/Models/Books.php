<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    protected $table = 'books';
    protected $guarded = ['id'];

    public function categories()
    {
        return $this->belongsTo(Categories::class);
    }

    use HasFactory;
}
